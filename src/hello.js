import style from "./st.module.scss";
import React from "react";
import { useContext } from "react";
function Hello() {
  const sometext = useContext(ThemeContext);
  return (
    <>
      <h1 className={style.hq}>Hello Nigger {sometext} </h1>
    </>
  );
}

export default Hello;
