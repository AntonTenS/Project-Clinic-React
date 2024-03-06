import style from "./footer.module.scss";
import React from "react";
import { useContext } from "react";
import { AuthContext } from "../context";
import logo from "../images/logofooter.svg";
import ws from "../images/whatsappfooter.svg";
import tl from "../images/telegramfooter.svg";
import ins from "../images/instagram.svg";

export function Footer() {
  const get = useContext(AuthContext);

  if (!get) {
    return <div>Загрузка текста...</div>;
  }
  return (
    <div className={style.congreen}>
      <div className={style.conmargin}>
        <div className={style.conpaddingY}>
          <div className={style.flex}>
            <div className={style.left}>
              <div className={style.logo}>
                <img src={logo} alt="logofooter" />
              </div>
              <div className={style.navbar}>
                <ul className={style.ul}>
                  <li className={style.li}>
                    <a href="">{get.navbar.about}</a>
                  </li>
                  <li className={style.li}>
                    <a href="">{get.navbar.services}</a>
                  </li>
                  <li className={style.li}>
                    <a href="">{get.navbar.specialists}</a>
                  </li>
                  <li className={style.li}>
                    <a href="">{get.navbar.prices}</a>
                  </li>
                  <li className={style.li}>
                    <a href="">{get.navbar.contacts}</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className={style.right}>
              <div className={style.conimg}>
                <img className={style.img} src={ins} alt="instagtam" />
                <img className={style.img} src={ws} alt="wathssap" />
                <img className={style.img} src={tl} alt="telegtam" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
