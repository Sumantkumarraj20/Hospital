import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Bottombar from "../components/Bottombar";
import style from "../assets/styles/Layout.module.css";
import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { checkAuthenticated, load_user } from "../actions/auth";

const Layout = ({checkAuthenticated, load_user, children}, props) => {
  const {user} = props;

  useEffect(() => {
    checkAuthenticated();
    load_user();
  },[]);
  const [show, setshow] = useState(true);
  const showhide = () => {
    console.log("clicked");
    setshow(!show);
  };

  return (
    <div>
      <Navbar onClick={showhide} user={user} />
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

export default connect(mapStateToProps, { checkAuthenticated, load_user })(Layout);
