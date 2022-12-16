import React from 'react'
import Header from './Header'
import './AdminViewBlog.css';
import { useLocation } from 'react-router-dom'

const AdminViewBlogs = () => {

  const location = useLocation();
  const data = location.state;

  return (
    <div>
      <Header />
      <div className="Main2">
        <div className="name2">
          <p>By: {data.Username}</p>
        </div>
        <div className="titleAndImg2">
          <div className="text2">
            <h1>{data.Title}</h1>
            <h4>{data.Story}</h4>
            <h5 className='Topic2'>{data.Topic}</h5>
            <h5 className='Date2'>{data.Date}</h5>
          </div>
          <div>
            <p><img className='Image2' src={data.ImageUrl} alt="" /></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminViewBlogs
