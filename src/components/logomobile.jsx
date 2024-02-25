import style from "./logomobile.module.scss";
import React from "react";
import img from "../images/logomobile.svg";

export function Logomobile() {
  return (
    <div className={style.block}>
      <img src={img} alt="logomobile" />
    </div>
  );
}
