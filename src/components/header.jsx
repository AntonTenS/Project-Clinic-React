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
import { Form } from "./form.jsx";

function Header({ setFormactiv, formactiv }) {
  const get = useContext(AuthContext);
  const [burgerbool, setBurgerbool] = useState(false);

  const changeBurger = () => {
    setBurgerbool(!burgerbool);
    if (burgerbool) {
      document.body.style.overflow = "";
    } else {
      document.body.style.overflow = "hidden";
    }
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
              <ButtonHeader setFormactiv={setFormactiv} />
            </div>
          </div>
        </BlockHeader>
      </div>
      <div className={style.reletive}>
        <Form formactiv={formactiv} setFormactiv={setFormactiv} />
        <Navbar formactiv={formactiv} burgerbool={burgerbool} setFormactiv={setFormactiv} />
      </div>
    </div>
  );
}

export default Header;
