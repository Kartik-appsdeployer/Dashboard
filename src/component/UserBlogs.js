import React, { useState } from 'react'
import Header from './Header'
import './UserBlogs.css'
import { Link } from 'react-router-dom';
import { collection, getDocs } from "firebase/firestore";
import { database } from '../firebase'

const UserBlogs = () => {


    const [allblogs, setAllblogs] = useState([]);
    const data = collection(database, 'NewBlogs');
    getDocs(data).then((snapshot) => {
        let res = [];
        snapshot.docs.forEach((item) => {
            res.push({ ...item.data(), id: item.id });

        })
        // console.log(res);
        setAllblogs(res);
    });

    return (
        <div>
            <Header />
            {
                allblogs.map(object => (
                    object.View ? 
                    <div className="Main">
                        <div className="name">
                            <p>By: {object.Username}</p>
                        </div>
                        <div className="titleAndImg">
                            <div className="text">
                                <h1>{object.Title}</h1>
                                <h4>{object.Story}</h4>
                                <h5 className='Topic'>{object.Topic}</h5>
                                <h5 className='Date'>{object.Date}</h5>
                                <h5 className='View'><Link className='Linkss' to='/userviewblog/:`${object.id}`' state={object}>Full View</Link></h5>
                            </div>
                            <div>
                                <p><img className='Image' src={object.ImageUrl} alt="" /></p>
                            </div>
                        </div>
                    </div> :
                    <div></div>
                ))
            }

        </div>
    )
}

export default UserBlogs
