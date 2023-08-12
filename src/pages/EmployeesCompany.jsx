import { useContext, useEffect, useState } from "react";
import FormContext from "../context/FormContext";
import FormEmpleados from "../components/FormEmpleados";
import Table from "../components/Table";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { URLAPI } from "../config";

function EmployeesCompany() {
  const context = useContext(FormContext);
  const getEmployee = context.getEmployee;
  const setRow = context.setRow;

  const [mostar, setMostar] = useState("false");
  const { users } = useParams();

  const getAdmin = async () => {
    try {
      const res = await fetch(`${URLAPI}api/admin/${users}`);
      const result = await res.json();
      const user = result[0].name;
      let admin = result[0].admin;
      if (users === user) setMostar(true);
      setRow(admin);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAdmin();
  }, []);
  useEffect(() => {
    if (mostar) getEmployee();
  }, [mostar]);

  return mostar ? (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {<FormEmpleados />}
      <div
        style={{
          width: "80%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h3>Tabla de empleados</h3>
        {<Table />}
      </div>
    </div>
  ) : (
    <h1>Usuario invalido</h1>
  );
}

export default EmployeesCompany;
