import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import FormContext from "../context/FormContext";
import { URLAPI } from "../config";

function FormLogin() {

const [invalidUsers, setinvalidUsers] = useState(false)
const [invalidPassword, setiinvalidPssword] = useState(false)
const context = useContext(FormContext)
const setUsusario = context.setUsusario
const ususario = context.ususario
const navigate = useNavigate()

const getAdmin = async () => {
  try {
    const res =  await fetch(`${URLAPI}api/admin/${ususario.name}`)
    const result = await res.json()
    let users = result[0].name
    let password = result[0].password


  if(users === ususario.name && password === ususario.pasword) {navigate(`/company/admin/${users}`)}else{
      if(password !== ususario.pasword ){
        setiinvalidPssword(true)
        setTimeout(() => {
          setiinvalidPssword(false)
        }, 3000);
      }

      }
  } catch (error) {
    console.log(error)
    setinvalidUsers(true)
    setTimeout(() => {
      setinvalidUsers(false)
    }, 3000);
  }
}

const handleSubtmit = (e) => {
    e.preventDefault()
    getAdmin()
}

  return (

      <form style={{width:"50%", display:"flex", flexDirection:"column", backgroundColor:"#ccc", border:"thin solid #fff", borderRadius:"3em", height:"150px", justifyContent:"center", alignItems:"center", gap:"0.3em"}}>
      <input type="text" name="name" onChange={(e) => setUsusario({...ususario , name: e.target.value})} />
      <input type="password" name="paswaord" onChange={(e) => setUsusario({...ususario , pasword: e.target.value})} />
      <button type="submit" onClick={handleSubtmit} style={{width:"50%"}}>Submit</button>
      {
      invalidUsers && <p>El usuario que buscas no existe</p>
    }
    {
      invalidPassword && <h1>La contraseña que introdujo no es correcta</h1>
    }
    </form>

  );
}

export default FormLogin;
