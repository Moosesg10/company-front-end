import React, { useContext } from "react";
import FormContext from "../context/FormContext";

function FormEmpleados() {
  const context = useContext(FormContext);
  const setEmpleados = context.setEmpleados;
  const inputContent = context.inputContent;
  const empleados = context.empleados;
  const upDateEmployee = context.upDateEmployee;
  const handleSubtmit = context.handleSubtmit;
  return (
    <>
      {!inputContent.boolean ? (
        <>
          <h2>Creando un Empleado</h2>
          <form
            style={{
              width: "50%",
              display: "flex",
              flexDirection: "column",
              backgroundColor: "#ccc",
              border: "thin solid #fff",
              borderRadius: "3em",
              height: "150px",
              justifyContent: "center",
              alignItems: "center",
              gap: "0.3em",
            }}
          >
            <input
              type="text"
              placeholder="Nombre de empleado"
              onChange={(e) =>
                setEmpleados({ ...empleados, name: e.target.value })
              }
              value={empleados.name}
            />
            <input
              type="text"
              placeholder="Salario de el empledo"
              onChange={(e) =>
                setEmpleados({ ...empleados, salary: e.target.value })
              }
              value={empleados.salary}
            />
            <button onClick={handleSubtmit} type="submit">
              Submit
            </button>
          </form>
        </>
      ) : (
        <>
          <h2>Editando un Empleado</h2>
          <form
            style={{
              width: "50%",
              display: "flex",
              flexDirection: "column",
              backgroundColor: "#ccc",
              border: "thin solid #fff",
              borderRadius: "3em",
              height: "150px",
              justifyContent: "center",
              alignItems: "center",
              gap: "0.3em",
            }}
          >
            <input
              type="text"
              placeholder="Nombre de empleado"
              onChange={(e) =>
                setEmpleados({ ...empleados, name: e.target.value })
              }
              value={empleados.name}
            />
            <input
              type="text"
              placeholder="Salario de el empledo"
              onChange={(e) =>
                setEmpleados({ ...empleados, salary: e.target.value })
              }
              value={empleados.salary}
            />
            <button onClick={upDateEmployee} type="submit">
              Submit
            </button>
          </form>
        </>
      )}
    </>
  );
}

export default FormEmpleados;
