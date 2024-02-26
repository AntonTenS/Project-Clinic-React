import style from "./navbar.module.scss";
import React from "react";
import { useContext } from "react";
import { AuthContext } from "../context";

export function Navbar(prop) {
  const get = useContext(AuthContext);

  return (
    <div className={prop.burgerbool ? style.bggreen : style.bggreentrue}>
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
  );
}
