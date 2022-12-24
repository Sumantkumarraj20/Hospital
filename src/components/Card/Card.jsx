import style from "./Card.module.css";
import React, { useEffect } from "react";

const Card = ({children }) => {
  return <div className={style.card}>{children}</div>;
};

export default (Card);
