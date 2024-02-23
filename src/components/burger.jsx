import style from "./burger.module.css";
import React from "react";

export function Burger() {
  return (
    <div className={style.burger}>
      <span className={style.top}></span>
      <span className={style.middle}></span>
      <span className={style.bottom}></span>
    </div>
  );
}
