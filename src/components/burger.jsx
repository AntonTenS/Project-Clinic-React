import style from "./burger.module.css";
import React from "react";

export function Burger(prop) {
  return (
    <div className={style.burger} onClick={prop.forClick}>
      <span className={prop.burgerbool ? style.toptrue : style.top}></span>
      <span className={prop.burgerbool ? style.middletrue : style.middle}></span>
      <span className={prop.burgerbool ? style.bottomtrue : style.bottom}></span>
    </div>
  );
}
