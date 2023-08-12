import React, { useState } from 'react'
import EmployeesCompany from './pages/EmployeesCompany'
import { Routes, Route, Navigate } from "react-router-dom"
import LoginComapany from './pages/LoginCompany';
import { Analytics } from '@vercel/analytics/react';
function App() {



  return (
  <>
    <Routes>
       <Route path='/company/admin' element={ <LoginComapany />}/>
        <Route path={`/company/admin/:users`} element={ <EmployeesCompany />}/> 
     
    </Routes>
    <Analytics/>
  </>
  )
}

export default App