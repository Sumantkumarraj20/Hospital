import navStyle from "../assets/styles/Navbar.module.css";
import logo from "../assets/images/logo.png";
import { HiMenu } from "react-icons/hi";
import profile_pic from "../assets/images/default.svg";
import React, { useEffect } from "react";
import { Link} from "react-router-dom";
import Searchbox from "./Searchbox";
import { checkAuthenticated, load_user, logout } from "../actions/auth";
import { connect } from "react-redux";

const Navbar = (
  { checkAuthenticated, load_user, logout,isAuthenticated, user, profile},
  props
) => {
  useEffect(() => {
    checkAuthenticated();
    load_user();
  }, []);

  const logout_user = () => {
    logout();
  };

  return (
    <div className={navStyle.navbar}>
      {isAuthenticated && (
        <button className={navStyle.himenu} onClick={props.onClick}>
          <span>
            <HiMenu />
          </span>
        </button>
      )}
      <div className={navStyle.logo}>
        <img src={logo} alt="logo" />        
      </div>
      {isAuthenticated ? (
        <>
          <div className={navStyle.middle}>
            <Searchbox />
          </div>
          <div className={navStyle.profile}>
            <div className={navStyle.profilepic}>
              <Link to="/profile" className={navStyle.prolink}>
              {profile? <img src={profile.profile_pic} alt="profile" />:<img src={profile_pic} alt="profile" />}
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
        </>
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

const mapStateToProps = (state) => ({
  user: state.rootReducer.auth.user,
  isAuthenticated: state.rootReducer.auth.isAuthenticated,
});

export default connect(mapStateToProps, {
  checkAuthenticated,
  load_user,
  logout,
})(Navbar);
