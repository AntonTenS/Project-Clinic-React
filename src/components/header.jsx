import style from "./header.module.scss";
import React from "react";
import { useContext } from "react";
import { AuthContext } from "../context";
function Header() {
  const get = useContext(AuthContext);

  if (!get) {
    return <div>Загрузка текста...</div>;
  }
  return (
    <>
      <h1 className={style.hq}>{`R${get.id}`}</h1>
    </>
  );
}

export default Header;
