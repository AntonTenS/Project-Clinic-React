import style from "./numberWhatsapp.module.scss";
import React from "react";
import { useContext } from "react";
import { AuthContext } from "../context";
import img from "../images/whatsappheader.svg";

export function NumberWhatsapp() {
  let get = useContext(AuthContext);

  return (
    <div className={style.block}>
      <img src={img} className={style.img} alt="whatsapp" />
      <p className={style.number}>{get.header.phone}</p>
    </div>
  );
}
