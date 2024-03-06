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
import { Navbar } from "./navbar.jsx";

function Header() {
  const get = useContext(AuthContext);
  const [burgerbool, setBurgerbool] = useState(false);

  const changeBurger = () => {
    setBurgerbool(!burgerbool);
  };

  if (!get) {
    return <div>Загрузка текста...</div>;
  }
  return (
    <div className={style.sticky}>
      <div className={style.conteiner}>
        <BlockHeader>
          <div className={style.mobile}>
            <div className={style.leftmobile}>
              <Burger forClick={changeBurger} burgerbool={burgerbool} />
              <Logomobile />
            </div>
            <div className={style.rightmobile}>
              <HeaderMobileRightBlock />
            </div>
          </div>
          <div className={style.desktop}>
            <div className={style.left}>
              <Logo />
              <Addres />
            </div>
            <div className={style.right}>
              <NumberWhatsapp />
              <ButtonHeader />
            </div>
          </div>
        </BlockHeader>
      </div>
      <div className={style.reletive}>
        <Navbar burgerbool={burgerbool} />
      </div>
    </div>
  );
}

export default Header;
