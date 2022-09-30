import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Bottombar from "../components/Bottombar";
import style from "../assets/styles/Layout.module.css";
import React, { useState} from "react";
import { connect } from "react-redux";

import { Navigate } from "react-router-dom";

const Layout = ({children, isAuthenticated}) => {
  const [show, setshow] = useState(true);
  const showhide = () => {
    setshow(!show);
  };

  if (!isAuthenticated){
    return(<Navigate to='/login'/>)
  }

  return (
    <div>
      <Navbar onClick={showhide} user='user' isAuthenticated="true" />
      {show && <Sidebar />}
      {!show && <Bottombar />}
      <div className={style.content}>{children}</div>
    </div>
  );
};

const mapStateToProps = state => ({
  user: state.rootReducer.auth.user,
  isAuthenticated: state.rootReducer.auth.isAuthenticated,
});

export default connect(mapStateToProps)(Layout);
