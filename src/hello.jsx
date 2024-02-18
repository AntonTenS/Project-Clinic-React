import style from "./st.module.scss";
import React, { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "./context";
function Hello(props) {
  const get = useContext(AuthContext);
  return (
    <>
      <h1 className={style.hq}>{`R${get.addres}`}</h1>
      <h1 className={style.hq}>{`R${get.home}`}</h1>
    </>
  );
}

export default Hello;
