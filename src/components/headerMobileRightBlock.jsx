import style from "./headerMobileRightBlock.module.scss";
import React from "react";
import { AuthContext } from "../context";
import { useContext } from "react";

export function HeaderMobileRightBlock() {
  let get = useContext(AuthContext);
  return (
    <div className={style.flexcolumn}>
      <p className={style.textphone}>{get.header.phone}</p>
      <p className={style.textcity}>{get.header.city}</p>
    </div>
  );
}
