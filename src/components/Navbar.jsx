import '../assets/style/Navbar.css';
import logo from '../assets/images/logo.png';
import {FiSearch} from 'react-icons/fi';
import profile_pic from '../assets/images/default.svg';
import React from 'react';

export default function Navbar() {
  return (
    <>
      <div className="logo">
        <img src={logo} alt="logo"/>
      </div>
      <div className='middle'>
          <input type="search" id="site-search" name="q"/>
          <button id='search'><FiSearch/></button>
        </div>
      <div className="profile">
        <div className="auth">
          <a href="/login" className="button">
            Signin
          </a>
          <a href="/resiter" className="button">
            Resister
          </a>
        </div>
        <div className="profilepic">
          <a href="/login" className="prolink">
            <img src={profile_pic} alt="profile" />
          </a>
        </div>
        
      </div>
  </>
  );
}
