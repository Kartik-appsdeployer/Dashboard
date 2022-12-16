import React from 'react'
import { Link } from 'react-router-dom';
import Header from './Header'
import Logo from './Logo.png'
import './Home.css';

const Home = () => {
  return (
    <div>
      <Header />
      <div className="HomeContent">
        <div className="HomeCenter">
          <div className="HomeContent">
            <h1 className='homeTitle'> A Blog that people will actually want to read.</h1>
            <p className='Para'>This is a plateform where people can show their experience about their work. People can Express their feelings towards someone. Can share their experience on an incident and many more. Hey you...You can also post your <Link className='HomeLink' to="/addblog">Blog</Link> to share your experience</p>
          </div>
          <div>
            <img className="HomeImage" src={Logo} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
