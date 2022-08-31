import navStyle from '../assets/styles/Navbar.module.css';
import logo from '../assets/images/logo.png';
import { HiMenu } from "react-icons/hi";
import profile_pic from '../assets/images/default.svg';
import React from 'react';
import { Link } from 'react-router-dom';
import Searchbox from './Searchbox';

export default function Navbar(props) {

  return (
    <div className={navStyle.navbar}>
      <button className={navStyle.himenu} onClick={props.onClick}>
          <span>
            <HiMenu />
          </span>
        </button>
      <div className={navStyle.logo}>
        <img src={logo} alt="logo"/>
      </div>
      <div className={navStyle.middle}>
        <Searchbox/>
        </div>
      <div className={navStyle.profile}>
        <div className={navStyle.profilepic}>
          <Link to="/login" className={navStyle.prolink}>
            <img src={profile_pic} alt="profile" />
          </Link>
        </div>
        
      </div>
  </div>
  );
}
