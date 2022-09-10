import style from "../assets/styles/Login.module.css";
import logo from "../assets/images/logo.png";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { checkAuthenticated, load_user } from "../actions/auth"

const FormLayout = ({ checkAuthenticated, load_user, children },props) => {
  const {user} = props;
useEffect(() => {
    checkAuthenticated();
    load_user();
  },[user]);
  return (
    <div className={style.main}>
      <div className={style.background}>
        <div className={style.shape}></div>
        <div className={style.shape}></div>
      </div>
      <div className={style.loginform}>
        <div className={style.logo}>
          <img src={logo} alt="logo" />
        </div>
        {children}
      </div>
    </div>
  );
};

export default connect(null, { checkAuthenticated, load_user })(FormLayout);
