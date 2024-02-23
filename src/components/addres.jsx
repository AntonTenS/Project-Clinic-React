import style from "./addres.module.scss";
import React from "react";
import { useContext } from "react";
import { AuthContext } from "../context";
import img from "../images/iconplace.svg";

export function Addres() {
  let get = useContext(AuthContext);

  return (
    <div className={style.blockflexrow}>
      <img src={img} className={style.img} alt="place" />
      <div className={style.blockflexcolumn}>
        <p className={style.textcity}>{get.header.city}</p>
        <p className={style.textplace}>{get.header.addres}</p>
      </div>
    </div>
  );
}
