import {React, useState, useEffect} from "react";
import { ToastContainer, toast } from 'react-toastify';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import AdminLogin from './component/Adminlogin';
import UserLogin from './component/UserLogin'
import Dashboard from './component/Dashboard';
function App() {


  return (
    <>
      <BrowserRouter>
        <ToastContainer position='top-center' />
        <Routes>
          <Route exact path='/' element={<UserLogin/>} />
          <Route path='/admin' element={<AdminLogin />} />
          <Route path='/dashboard' element={<Dashboard />} />
        </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
