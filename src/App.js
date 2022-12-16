import {React, useState, useEffect} from "react";
import { ToastContainer, toast } from 'react-toastify';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import AdminLogin from './component/Adminlogin';
import AddBlog from './component/AddBlog';
import Home from './component/Home';
import UserBlogs from './component/UserBlogs';
import UserViewBlog from './component/UserViewBlog';
import AdminBlogs from './component/AdminBlogs';
import AdminViewBlogs from './component/AdminViewBlogs';
import UserLogin from './component/UserLogin'
import { userAuth } from './firebase';
import Dashboard from './component/Dashboard';
import Header from "./component/Header";


function App() {
  const [username, setUserName] = useState("");

  useEffect(() => {
    userAuth.onAuthStateChanged((user) => {
      if(user){
        setUserName(user.displayName);
      }
      else{
        setUserName("");
      }
    })
  })

  return (
    <>
      <BrowserRouter>
        <ToastContainer position='top-center' />
        <Routes>
          <Route exact path='/' element={<UserLogin/>} />
          <Route path='/admin' element={<AdminLogin />} />
          <Route path='/home' element={<Home />} />
          <Route path='/header' element={<Header name={username} />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/addblog' element={<AddBlog />} />
          <Route path='/userblog' element={<UserBlogs />} />
          <Route path='/userviewblog/:id' element={<UserViewBlog />} />
          <Route path='/adminblogs' element={<AdminBlogs />} />
          <Route path='/adminviewblogs/:id' element={<AdminViewBlogs />} />
        </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
