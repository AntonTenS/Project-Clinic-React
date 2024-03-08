import React from "react";
import style from "./swiperitem.module.scss";
import { useContext } from "react";
import img1 from "../images/checkup1.jpg";
import { AuthContext } from "../context";
import { arraypic } from "./images";

export function Swiperitem({ object, index, setFormactiv }) {
  const get = useContext(AuthContext);

  if (!get) {
    return <div>Загрузка текста...</div>;
  }

  return (
    <div className={style.slide} key={index}>
      <div className={style.flexmain}>
        <div className={style.left}>
          <div className={style.title}>{get.checkup[object].title}</div>
          <div className={style.subtitle}>{get.checkup[object].subtitle}</div>
          <ul className={style.ul}>
            {Object.keys(get.checkup[object].list).map((key, index) => (
              <li className={style.li} key={index}>
                {get.checkup[object].list[key]}
              </li>
            ))}
          </ul>
          <div className={style.divcast}>
            <div className={style.casttext}>{get.checkup[object].casttext}</div>
            <div className={style.castcurrent}>{get.checkup[object].castcurrent}</div>
            <div className={style.castpast}>{get.checkup[object].castpast}</div>
          </div>
          <div className={style.conforbuttons}>
            <button className={style.buttonleft} onClick={setFormactiv}>
              {get.checkup[object].textbuttonleft}
            </button>
            <button className={style.buttonright}>{get.checkup[object].textbuttonright}</button>
          </div>
        </div>
        <div className={style.right}>
          <img className={style.img} src={arraypic[get.checkup[object].img]} alt="img1" />
        </div>
      </div>
    </div>
  );
}
