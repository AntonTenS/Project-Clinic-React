import style from "./header.module.scss";
import React from "react";
import { useContext, useState } from "react";
import { AuthContext } from "../context";
import { BlockHeader } from "./blockHeader.jsx";
import { Burger } from "./burger.jsx";
import { Logo } from "./logo.jsx";
import { Addres } from "./addres.jsx";
import { NumberWhatsapp } from "./numberWhatsapp.jsx";
import { ButtonHeader } from "./buttonHeader.jsx";
import { Logomobile } from "./logomobile.jsx";
import { HeaderMobileRightBlock } from "./headerMobileRightBlock.jsx";

function Header() {
  const get = useContext(AuthContext);
  const [burgerbool, setBurgerbool] = useState(false);

  const changeBurger = () => {
    setBurgerbool(!burgerbool);
    console.log(burgerbool);
  };

  if (!get) {
    return <div>Загрузка текста...</div>;
  }
  return (
    <div>
      <div className={style.conteiner}>
        <BlockHeader>
          <div className={style.mobile}>
            <div className={style.leftmobile}>
              <Burger forClick={changeBurger} burgerbool={burgerbool}></Burger>
              <Logomobile></Logomobile>
            </div>
            <div className={style.rightmobile}>
              <HeaderMobileRightBlock></HeaderMobileRightBlock>
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
      <div className={style.reletive}>
        <div className={burgerbool ? style.bggreen : style.bggreentrue}>
          <div className={style.conteiner}>
            <nav className={style.navbar}>
              <ol className={style.navbarOl}>
                <li>
                  <a href="#">{get.navbar.about}</a>
                </li>
                <li>
                  <a href="#">{get.navbar.services}</a>
                </li>
                <li>
                  <a href="#">{get.navbar.specialists}</a>
                </li>
                <li>
                  <a href="#">{get.navbar.prices}</a>
                </li>
                <li>
                  <a href="#">{get.navbar.contacts}</a>
                </li>
              </ol>
              <button className={style.button}>{get.header.button}</button>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
