import style from "./addres.module.scss";
import React from "react";
import { useContext } from "react";
import { AuthContext } from "../context";
import img from "../images/iconplace.svg";

export function Addres() {
  let get = useContext(AuthContext);

  return (
    <div>
      <img src={img} alt="place" />
      <p>{get.header.city}</p>
      <p>{get.header.addres}</p>
    </div>
  );
}
