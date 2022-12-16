import React from 'react'
import Header from './Header'
import './UserViewBlog.css'
import { useLocation, Link } from 'react-router-dom'

const UserViewBlog = () => {
    const location = useLocation();
    const data = location.state;


    return (
        <div>
            <Header />
            <div className="Main1">
                <div className="name1">
                    <p>By: {data.Username}</p>
                </div>
                <div className="titleAndImg1">
                    <div className="text1">
                        <h1>{data.Title}</h1>
                        <h4>{data.Story}</h4>
                        <h5 className='Topic1'>{data.Topic}</h5>
                        <h5 className='Date1'>{data.Date}</h5>
                    </div>
                    <div>
                        <p><img className='Image1' src={data.ImageUrl} alt="" /></p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default UserViewBlog
