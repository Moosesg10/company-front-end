import React, { useContext, useEffect, useState } from "react";
import FormContext from "../context/FormContext";
import { asignament, asignamentRol, delet, getAdmin } from "../controllers/Tables.controllers";


function TableRow({
  data,
  edit,
  index,
  id,
  deletEmployee,
  getEmployee,
  params,
}) {
//Constantes de Context
const context = useContext(FormContext);
  const row = context.row;
  const admin = context.admin
  const setAdmin = context.setAdmin
  const optionsadmin = context.optionsadmin
  const options = context.options
  const optionsemployee = context.optionsemployee
  const roles = context.roles
  const setRoles = context.setRoles
//Constantes Heradadas
  const { name, salary, rol } = data;

//Constantes De Estados De React
  const [mostarOptionsAddRol, setMostarOptionsAddRol] = useState(false);
  const [rols, setRols] = useState(false);




//Funciones de Manejo de Roles 
  useEffect(() => {
    getAdmin(params,setRoles);
  }, []);
  useEffect(() => {
    if (rols) asignamentRol(admin,options,optionsadmin,optionsemployee,setRols,setMostarOptionsAddRol,getEmployee);
  }, [rols]);

  return (
        <tr>
          <td style={{ color: "#6c1a6bdc", borderRight: "thin solid #f5f5f5" }}>
            {index + 1}
          </td>
          <td style={{ color: "#05920cdc", borderRight: "thin solid #f5f5f5" }}>
            {name}
          </td>
          <td style={{ color: "#05920cdc", borderRight: "thin solid #f5f5f5" }}>
            {rol}
          </td>
          <td style={{ color: "#071ca8f3", borderRight: "thin solid #f5f5f5" }}>
            {toString(salary).slice(3)}
          </td>
          <td style={{ borderRight: "thin solid #f5f5f5" }}>
            <button onClick={() => delet(id, index, data,roles,deletEmployee)}>Eliminar</button>
            <button onClick={() => edit(id, index)}>Editar</button>
          </td>
        
          {
            roles === import.meta.env.VITE_ROL_Z  &&   <td>
            <select
              onChange={(e) => {
                if (e.target.value !== "Select Rol")
                  asignament(data, e.target.value,setRols,setAdmin);
              }}
              onClick={() => {
                setMostarOptionsAddRol(true);
              }}
            >
              <option >Select Rol</option>
              {mostarOptionsAddRol && (
                <>

                {
                  !data.rol  ? <>
                  <option value="empleado">Empleado</option> 
                  <option value="admin">Admin</option>
                  </>
                  :
                  data.rol === "admin" ?  <option value="empleado">Empleado</option> :
                  <option value="admin">Admin</option>
                 
                }
                </>
              )}
            </select>
          </td>
          }
        
        </tr>

  );
}

export default TableRow;
