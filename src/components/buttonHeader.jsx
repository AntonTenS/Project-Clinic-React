import style from "./buttonHeader.module.scss";
import React from "react";
import { useContext } from "react";
import { AuthContext } from "../context";

export function ButtonHeader({ setFormactiv }) {
  let get = useContext(AuthContext);

  return (
    <div>
      <button type="button" className={style.text} onClick={setFormactiv}>
        {get.header.button}
      </button>
    </div>
  );
}
