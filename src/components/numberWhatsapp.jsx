import style from "./numberWhatsapp.module.scss";
import React from "react";
import { useContext } from "react";
import { AuthContext } from "../context";
import img from "../images/whatsappheader.svg";

export function NumberWhatsapp() {
  let get = useContext(AuthContext);

  return (
    <div>
      <img src={img} alt="whatsapp" />
      <p>{get.header.phone}</p>
    </div>
  );
}
