import style from "../assets/styles/Card.module.css";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { checkAuthenticated, load_user } from "../actions/auth";

const Card = ({ checkAuthenticated, load_user, children }, props) => {
  const {user} = props;
  useEffect(() => {
    checkAuthenticated();
    load_user();
  },[user]);
  return <div className={style.card}>{children}</div>;
};

export default connect(null, { checkAuthenticated, load_user })(Card);
