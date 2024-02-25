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
import { Logomobile } from "./logomobile.jsx";

function Header() {
  const get = useContext(AuthContext);

  if (!get) {
    return <div>Загрузка текста...</div>;
  }
  return (
    <div className={style.conteiner}>
      <BlockHeader>
        <div className={style.mobile}>
          <div className={style.leftmobile}>
            <Burger></Burger>
            <Logomobile></Logomobile>
          </div>
          <div className={style.rightmobile}>
            <div className={style.flexcolumn}>
              <p className={style.textphone}>{get.header.phone}</p>
              <p className={style.textcity}>{get.header.city}</p>
            </div>
          </div>
        </div>
        <div className={style.desktop}>
          <div className={style.left}>
            <Logo />
            <Addres></Addres>
          </div>
          <div className={style.right}>
            <NumberWhatsapp></NumberWhatsapp>
            <ButtonHeader></ButtonHeader>
          </div>
        </div>
      </BlockHeader>
    </div>
  );
}

export default Header;
