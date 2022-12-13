import React, { useState } from 'react'
import './adminlogin.css';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const initialState = {
  Email: '',
  Password: ''
}
const Adminlogin = () => {

  const navigate = useNavigate();

  const [admin, setAdmin] = useState(initialState);
  const {Email, Password} = admin;

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success('Admin Logged In');
    navigate('/dashboard');
  }
 
  return (
    <div>
      <div className="loginContainer">
        <div className="centerLogin">
          <div className="Heading">
            <h1>Admin Login</h1>
          </div>

          <div className="loginDetails">
            <label className="lables" htmlFor="email">Email</label><br />
            <input className="inputs" autoComplete="off" type="email" placeholder="Enter your Email" onChange={(e) => setAdmin((prev) => ({ ...prev, Email: e.target.value }))} />
            <br />

            <label className="lables" htmlFor="password">Password</label><br />
            <input className="inputs" autoComplete="off" type="password" placeholder="Enter your Password" onChange={(e) => setAdmin((prev) => ({ ...prev, Password: e.target.value }))} />
            <br />

            <button onClick={handleSubmit} className="saveButton">Login</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Adminlogin
