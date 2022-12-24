import navStyle from "./Navbar.module.css";
import logo from "../../assets/images/logo.png";
import { HiMenu } from "react-icons/hi";
import profile_pic from "../../assets/images/default.svg";
import React from "react";
import { Link} from "react-router-dom";
import Searchbox from "../Searchbox/Searchbox";

const Navbar = (
  { onClick, logout_user, isAuthenticated, profile}
) => {

  return (
    <div className={navStyle.navbar}>
      <div className={navStyle.logo}>
      {onClick && (
        <button className={navStyle.himenu} onClick={onClick}>
          <span>
            <HiMenu />
          </span>
        </button>
      )}
        <img src={logo} id={navStyle.logoimg} alt="logo" />        
      </div>
      {isAuthenticated &&
        <div className={navStyle.middle}>
          <Searchbox />
        </div>
              }
      {isAuthenticated ? (
        <div className={navStyle.profile}>
          <div className={navStyle.profilepic}>
            <Link to="/profile" className={navStyle.prolink}>
            {profile? <img src={profile.profile.profile_pic} id={navStyle.avatar} alt="profile" />:<img src={profile_pic} id={navStyle.avatar}  alt="profile" />}
            </Link>
          </div>
          <div className={navStyle.dropdown}>
            <Link className={navStyle.item} to="/profile">
              ViewProfile
            </Link>
            <Link className={navStyle.item} to="/">
              ChangeProfilePic
            </Link>
            <Link className={navStyle.item} to="/" onClick={logout_user}>
              Logout
            </Link>
          </div>
        </div>
      ) : (
        <div className={navStyle.profile}>
          <div className={navStyle.auth}>
            <Link to="/login" className={navStyle.button}>
              Signin
            </Link>
            <Link to="/signup" className={navStyle.button}>
              Resister
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default (Navbar);
