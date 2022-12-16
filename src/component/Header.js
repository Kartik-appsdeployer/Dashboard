import React from 'react'
import Logo from './Logo.png'
import { Link } from 'react-router-dom'
import './Header.css';

const Header = (props) => {
    return (
        <div>
            <div className="Header">
                <div className="logo">
                    <Link to="/home"><img src={Logo} alt="" /></Link>
                    <h1>BlogSpot</h1>
                </div>

                <div className="Routing">
                    <Link className='links' to="/userblog">View All Blogs</Link>
                    <Link className='links' to="/addblog">Add Blog</Link>
                </div>

                <div className="UserName">
                    <h1>{props.username ? props.username : <Link className='register' to="/">Register Yourself</Link>}</h1>
                </div>
            </div>
        </div>
    )
}

export default Header
