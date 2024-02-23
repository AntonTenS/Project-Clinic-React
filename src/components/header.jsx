import style from "./header.module.scss";
import React from "react";
import { useContext } from "react";
import { AuthContext } from "../context";
import { BlockHeader } from "./blockHeader.jsx";
import { Burger } from "./burger.jsx";
import { Logo } from "./logo.jsx";
import { Addres } from "./addres.jsx";
import { NumberWhatsapp } from "./numberWhatsapp.jsx";
import { ButtonHeader } from "./buttonHeader.jsx";

function Header() {
  const get = useContext(AuthContext);

  if (!get) {
    return <div>Загрузка текста...</div>;
  }
  return (
    <div className={style.conteiner}>
      <BlockHeader>
        <div className={style.left}>
          <Burger></Burger>
          <Logo />
          <Addres></Addres>
        </div>
        <div className={style.right}>
          <NumberWhatsapp></NumberWhatsapp>
          <ButtonHeader></ButtonHeader>
        </div>
      </BlockHeader>
    </div>
  );
}

export default Header;
