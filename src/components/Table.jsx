import React, { useContext } from 'react'
import TableRow from './TableRow'
import FormContext from '../context/FormContext';
import { useParams } from 'react-router-dom';

function Table() {
  const context = useContext(FormContext)
  const datas = context.datas;
  const edit = context.edit;
  const deletEmployee = context.deletEmployee
  const getEmployee = context.getEmployee
  const row = context.row
  const params = useParams()
  const roles = context.roles
  
  return (
    <>
        <table>
        <thead>
          {row === "true" &&<tr>
            <th style={{borderRight:"thin solid #f5f5f5"}}>N°</th>
            <th style={{borderRight:"thin solid #f5f5f5"}}>Nombre</th>
            <th style={{borderRight:"thin solid #f5f5f5"}}>Rol</th>
            <th style={{borderRight:"thin solid #f5f5f5"}}>Salario</th>
            <th style={{borderRight:"thin solid #f5f5f5"}}>Acciones</th>
          {roles === import.meta.env.VITE_ROL_Z &&  <th style={{borderRight:"thin solid #f5f5f5"}}>Asignar Rol</th>}
          </tr>}
          {row === "false" &&<tr>
            <th style={{borderRight:"thin solid #f5f5f5"}}>N°</th>
            <th style={{borderRight:"thin solid #f5f5f5"}}>Nombre</th>
            <th style={{borderRight:"thin solid #f5f5f5"}}>Salario</th>
            <th style={{borderRight:"thin solid #f5f5f5"}}>Acciones</th>
          </tr>}
        </thead>
        <tbody >
          {datas.length > 0 ? (
           datas.map((data, index) => (
            <TableRow
              key={data.id}
              data={data}
              edit={edit}
              index={index}
              id={data.id}
              deletEmployee={deletEmployee}
              getEmployee={getEmployee}
              params={params}
            />
          ))
          
          ) : (
            <tr>
            <td colSpan={3}>Sin Datos </td>
          </tr>
          )}
        </tbody>
      </table>
    </>
  )
}

export default Table