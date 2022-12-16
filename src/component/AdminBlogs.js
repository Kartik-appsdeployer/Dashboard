import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { collection, getDocs, doc, updateDoc } from "firebase/firestore";
import { database } from '../firebase'
import './AdminBlogs.css'
import Header from "./Header";


const AdminBlogs = () => {
    const [adminblog, setAdminBlog] = useState([]);
    const data = collection(database, 'NewBlogs');
    getDocs(data).then((snapshot) => {
        let res = [];
        snapshot.docs.forEach((item) => {
            res.push({ ...item.data(), id: item.id });
        })
        // console.log(res);
        setAdminBlog(res);
    });
    const handleAccept = (id) => {
        console.log("Clicked")
        // const docRef = doc(database, 'NewBlogs', id);
        // updateDoc(docRef, {
        //     View: true
        // }).then(() => {
        //     console.log("Done Accept" + id);
        // })
    }
    // const handleReject = (id) => {
    //     const docRef = doc(database, 'NewBlogs', id);
    //     updateDoc(docRef, {
    //         View: false
    //     })
    // }
    return (
        <div>
            <Header/>
            <table>
                <tr id="header">
                    <th>UserName</th>
                    <th>Title</th>
                    <th>Topic</th>
                    <th>Date</th>
                    <th>Action</th>
                    <th>Accept</th>
                </tr>
                {
                    adminblog.map(object => (
                        !object.View ?
                            <tr>
                                <td>{object.Username}</td>
                                <td>{object.Title}</td>
                                <td>{object.Topic}</td>
                                <td>{object.Date}</td>
                                <td><Link className='ViewBtn' to="/adminviewblogs/:`${object.id}`" state={object}>View</Link></td>
                                <td><button className='AdminBtn' onClick={handleAccept(object.id)}>Accept</button></td>
                                {/* <td><button onClick={handleReject(object.id)}>Reject</button></td> */}
                            </tr> :
                            <tr></tr>
                    ))
                }

            </table>
        </div>
    )
}

export default AdminBlogs
