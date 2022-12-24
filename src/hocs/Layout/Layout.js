import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import Bottombar from "../../components/Bottombar/Bottombar";
import style from "./Layout.module.css";
import React, { useState, useEffect} from "react";
import { connect } from "react-redux";

import { Navigate } from "react-router-dom";
import {
  checkAuthenticated,
  load_user,
  logout,
  load_profile,
} from "../../actions/auth";

const Layout = ({
  checkAuthenticated,
  load_user,
  logout,
  load_profile,
  children,
  isAuthenticated,
  user,
  profile,
}) => {
  useEffect(() => {
    checkAuthenticated();
    load_user();
    if (user){
      load_profile(user.id)}
  }, []);
  
  const logout_user = () => {
    logout();
  };

  const [show, setshow] = useState(true);
  const showhide = () => {
    setshow(!show);
  };

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return (
    <div>
      <Navbar
        onClick={showhide}
        logout_user={logout_user}
        user={user}
        profile={profile}
        isAuthenticated={isAuthenticated}
      />
      {show && <Sidebar />}
      {!show && <Bottombar />}
      <div className={style.content}>{children}</div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.rootReducer.auth.user,
  isAuthenticated: state.rootReducer.auth.isAuthenticated,
  profile: state.rootReducer.auth.profile
});

export default connect(mapStateToProps, {
  checkAuthenticated,
  load_user,
  logout,
  load_profile,
})(Layout);
