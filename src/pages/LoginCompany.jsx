import React, { useEffect, useState } from 'react'
import FormLogin from '../components/FormLogin'

function LoginComapany() {
  return (
    <div style={{display:"flex" , flexDirection:"column", alignItems:"center", justifyContent:"center", height:"100%", width:"100%"}}>
        <h1 style={{margin:"0", padding:"1em"}}>Login Company</h1>
      <div style={{padding:"0", margin:"0",width:"100%", display:"flex", justifyContent:"center"}}>
      <FormLogin/>
      </div>
    </div>
  )
}

export default LoginComapany