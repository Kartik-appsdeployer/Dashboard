import React, { useState } from 'react'
import './AddBlog.css'
import Header from "./Header";
import User from './User.png'
import { database, storage } from '../firebase';
import { getDownloadURL, uploadBytesResumable, ref  } from "firebase/storage";
import { collection, addDoc } from "firebase/firestore";
import { useNavigate } from 'react-router-dom';

const initialBlog = {
    Username: "",
    Title: "",
    Story: "",
    Topic: "",
    View: false,
    ImageUrl: User
}
const AddBlog = () => {
    const navigate = useNavigate();
    const [blog, setBlog] = useState(initialBlog);
    const [image, setImage] = useState(null)
    const [url, setUrl] = useState(null)
    const [progress, setProgress] = useState(0);
    const { Username, Title, Story, Topic, View } = blog;

    // const storage = getStorage();
    // const storageRef = ref(storage, 'Images');
    // const handleImage = (e) => {
    //     let file = e.target.files[0];
    //     let fileRef = ref(storage, file.name);
    //     const Task = uploadBytesResumable(fileRef, file);
    // }

    const handleImage = (e) => {
        e.preventDefault();
        // console.log("Clicked")
        const file = e.target.files[0];
        const storageRef = ref(storage, '/files/`${file.name}`');
        const uploadTask = uploadBytesResumable(storageRef, file);
        uploadTask.on(
            "state_changed", (snapshot) => {
                const prog = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
                setProgress(prog);
            },
            (err) => console.log(err),
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((URL) => {
                    setUrl(URL);
                    console.log("URL Mila")
                })
            }
        )
        
    }

    const handleblog = (e) => {
        e.preventDefault();
        // const imageRef = ref(storage, 'image');
        // uploadBytes(imageRef, image).then((snapshot) => {
        //     console.log(snapshot);
        //   }).catch((err) => {
        //     console.log(err.message)
        //   });
        
        const data = collection(database, 'NewBlogs');
        let date = new Date();
        let prev = date.getDate();
        date.setDate(prev);
        let newDate = date.toJSON().slice(0, 10)
        addDoc(data, {
            Username: Username,
            Title: Title,
            Story: Story,
            Topic: Topic,
            Date: newDate,
            View: View,
            ImageUrl: url
        }).then(() => {
            navigate('/home');
        })
    }

    return (
        <div>
            <Header/>
            <div className="container">
                <div className="MainContent">
                    <input className='Inputs' type="text" placeholder='Your Name' onChange={(e) => setBlog((prev) => ({ ...prev, Username: e.target.value }))} />
                    <br />
                    <input className='Inputs' type="text" placeholder='Title' onChange={(e) => setBlog((prev) => ({ ...prev, Title: e.target.value }))} /><br />
                    <input className='Inputs' type="textarea" placeholder='Tell your Story...' onChange={(e) => setBlog((prev) => ({ ...prev, Story: e.target.value }))} /><br />
                    <input className="File" type="file" onChange={handleImage} /><br />
                    <input className='Inputs' type="text" placeholder='Topic' onChange={(e) => setBlog((prev) => ({ ...prev, Topic: e.target.value }))} /><br />
                    <button onClick={handleblog} className='MyBTN'>Post</button>
                </div>
            </div>
        </div>
    )
}

export default AddBlog
