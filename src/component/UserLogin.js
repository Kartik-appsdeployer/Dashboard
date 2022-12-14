import './userLogin.css';
import {React, useState, useEffect} from "react";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { v4 as uuidv4 } from 'uuid';
import { getDatabase, ref, set } from "firebase/database";
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import {db, userAuth, adminAuth} from '../firebase';

const initialState = {
  Name: '',
  Email: '',
  Password: ''
}

const UserLogin = () => {

  const navigate = useNavigate();

  const [auth, setAuth] = useState(initialState);

  const {Name, Email, Password} = auth;

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!Name || !Email || !Password){
      toast.error('Please fill all the details!!');
      return;
    }
    
    console.log(auth.Name);
    console.log(auth.Email);
    console.log(auth.Password);
    // Authenticaton
    createUserWithEmailAndPassword(userAuth, Email, Password).then(async(res) => {
      const User = res.user;
      await updateProfile(User, {
        displateName: Name
      });
      toast.success("Signed Up!!")
      navigate('/')
    }).catch((err) => {
      toast.error(err.message);
    })


    // Adding User to Data base
    let date = new Date();
    let prev = date.getDate();
    // date.setDate(prev - 1);
    date.setDate(prev);
    // date.setMonth(10)
    let newDate = date.toJSON().slice(0, 10)
    const uuid = uuidv4();
    set(ref(db, 'Users/' + uuid), {
      Name: auth.Name,
      Email: auth.Email,
      Password: auth.Password,
      Date: newDate
    }).then((res) => {
    }).catch((err) => {
      console.log(err)
    })

  }

  return (
    <div>
      <div className="loginContainer">
        <div className="centerLogin">
          <div className="Heading">
            <h1>User Signup</h1>
          </div>

          <div className="loginDetails">
            <label className="lables" htmlFor="name">Name</label><br />
            <input className="inputs" autoComplete="off" type="text" placeholder="Enter your Name" onChange={(e) => setAuth((prev) => ({...prev, Name: e.target.value}))} />
            <br />

            <label className="lables" htmlFor="email">Email</label><br />
            <input className="inputs" autoComplete="off" type="email" placeholder="Enter your Email" onChange={(e) => setAuth((prev) => ({...prev, Email: e.target.value}))} />
            <br />

            <label className="lables" htmlFor="password">Password</label><br />
            <input className="inputs" autoComplete="off" type="password" placeholder="Enter your Password" onChange={(e) => setAuth((prev) => ({...prev, Password: e.target.value}))} />
            <br />

            <button onClick={handleSubmit} className="saveButton">Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserLogin
