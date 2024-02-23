import style from "./logo.module.scss";
import React from "react";
import img from "../images/logoHeader.svg";

export function Logo() {
  return (
    <div className={style.block}>
      <img src={img} alt="logo" />
    </div>
  );
}
