import style from "./header.module.scss";
import React from "react";
import { useContext } from "react";
import { AuthContext } from "../context";
import { BlockHeader } from "./blockHeader.jsx";
function Header() {
  const get = useContext(AuthContext);

  if (!get) {
    return <div>Загрузка текста...</div>;
  }
  return (
    <BlockHeader>
      <div className="burger">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div>
        <img src="" alt="logo" />
      </div>
      <div>
        <img src="" alt="place" />
        <p className="addres"></p>
        <p className="addres"></p>
      </div>
      <div>
        <img src="" alt="whatsapp" />
        <p className="phone"></p>
      </div>
      <div>
        <button type="button"></button>
      </div>
    </BlockHeader>
  );
}

export default Header;
