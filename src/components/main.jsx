import style from "./main.module.scss";
import React from "react";
import img from "../images/imageMain.jpg";
import { useContext } from "react";
import { AuthContext } from "../context";

function Main() {
  const get = useContext(AuthContext);

  if (!get) {
    return <div>Загрузка текста...</div>;
  }
  return (
    <div className={style.con}>
      <div className={style.flexrow}>
        <div className={style.left}>
          <div className={style.flexcenter}>
            <h1>{get.main.title}</h1>
            <p>{get.main.discription}</p>
          </div>
        </div>
        <div className={style.right}>
          <img src={img} alt="mainImage" />
        </div>
      </div>
    </div>
  );
}

export default Main;
