import { createContext, useState } from "react";
import { URLAPI } from "../config";

const FormContext = createContext();
const initialstate = [
  {
    id: "",
    name: "",
    salary: "",
  },
];
const ContextProvider = ({ children }) => {
  const [datas, setDatas] = useState(initialstate);
  const [mostrar, setMostrar] = useState(false);
  const [empleados, setEmpleados] = useState({
    name: "",
    salary: "",
  });
  const [ususario, setUsusario] = useState({
    name:"",
    pasword:""
})
  const [inputContent, setInputContent] = useState({
    boolean: false,
    id: "",
  });
  const [row, setRow] = useState(false);
  const [admin, setAdmin] = useState({
    name: "",
    password: "",
    admin: "",
    rol: "",
  });
  const [roles, setRoles] = useState("");
  const getEmployee = async () => {
    try {
      const res = await fetch(`${URLAPI}api/empleados`);
      const result = await res.json();
      setDatas(result);
      setMostrar(true);
    } catch (error) {
      console.log(error);
    }
  };

  const createEmployee = async () => {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(empleados),
    };

    try {
      await fetch(`${URLAPI}api/empleados`, options);
      getEmployee();
      setEmpleados({
        name: "",
        salary: "",
      });
    } catch (error) {
      console.log(error);
    }
  };

  const upDateEmployee = async (e) => {
    e.preventDefault();
    const id = inputContent.id;
    const options = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(empleados),
    };
    try {
      await fetch(`${URLAPI}api/empleados/${id}`, options);
      getEmployee();
      setEmpleados({
        name: "",
        salary: "",
      });
      setInputContent({
        boolean: false,
        id: "",
      });
    } catch (error) {
      console.log(error);
    }
  };

  const deletEmployee = async (id, index, rolY) => {
    const options = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(empleados),
    };

    const Confirm = confirm(
      `seguro de que quiere eliminar el ${rolY} con el numero : ` + parseInt(index)
    );

    if (Confirm) {
      try {
        await fetch(`${URLAPI}api/empleados/${id}`, options);
        getEmployee();
      } catch (error) {
        console.log(error);
      }
    }
  };

  const edit = (id, index) => {
    setInputContent({
      boolean: true,
      id,
    });
    setEmpleados({
      name: datas[index].name,
      salary: datas[index].salary,
    });
  };

  const handleSubtmit = (e) => {
    e.preventDefault();
    createEmployee();
  };

  const optionsadmin = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(admin),
  };

  const optionsemployee = {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(admin),
  };
  const options = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  };


  const data = {
    edit,
    getEmployee,
    createEmployee,
    upDateEmployee,
    handleSubtmit,
    deletEmployee,
    datas,
    mostrar,
    empleados,
    inputContent,
    setEmpleados,
    row,
    ususario,
    setUsusario,
    setRow,
    admin,
    setAdmin,
    options,
    optionsemployee,
    optionsadmin,
    roles,
    setRoles
  };

  return <FormContext.Provider value={data}>{children}</FormContext.Provider>;
};

export { ContextProvider };
export default FormContext;
