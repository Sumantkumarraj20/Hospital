import style from "../assets/styles/Login.module.css";
import React, { useEffect } from "react";
import {checkAuthenticated, load_user} from '../actions/auth'
import { connect } from "react-redux";
const Form = ({children, checkAuthenticated, load_user}) => {
  useEffect(()=>{
    checkAuthenticated();
    load_user();
  },[])
  return (
    <>
    <div className={style.main}>
      <div className={style.background}>
        <div className={style.shape}></div>
        <div className={style.shape}></div>
      </div>
      <div className={style.loginform}>
        {children}
      </div>
    </div>
    </>
  );
};

export default connect(null,{checkAuthenticated, load_user}) (Form);
