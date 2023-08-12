import React, { useState } from 'react'
import EmployeesCompany from './pages/EmployeesCompany'
import { Routes, Route } from "react-router-dom"
import LoginComapany from './pages/LoginCompany';
import { Analytics } from '@vercel/analytics/react';
function App() {
  return (
  <>
    <Routes>
       <Route path='/company/admin' element={ <LoginComapany />}/>
        <Route path={`/company/admin/:users`} element={ <EmployeesCompany />}/> 
    </Routes>
    <h1>env : {import.meta.env.VITE_URL_API }</h1>
    <Analytics/>
  </>
  )
}
export default App