import style from "../assets/styles/Login.module.css";
import logo from "../assets/images/logo.png";

import React from "react";

const FormLayout = (props) => {
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
        {props.children}
      </div>
    </div>
  );
};

export default FormLayout;
