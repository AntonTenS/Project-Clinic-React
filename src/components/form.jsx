import style from "./form.module.scss";
import React from "react";
import { useContext } from "react";
import { AuthContext } from "../context";

export function Form() {
  const get = useContext(AuthContext);

  if (!get) {
    return <div>Загрузка текста...</div>;
  }
  return (
    <div className={style.blockgreen}>
      <div className={style.concenter}>
        <div className={style.blockform}>
          <div className={style.flex}>
            <div className={style.left}>
              <p className={style.textbolt}>{get.form.title}</p>
              <p className={style.textlittle}>{get.form.discription}</p>
            </div>
            <div className={style.right}>
              <input className={style.input} type="text" placeholder={get.form.fio} />
              <input className={style.input} type="text" placeholder={get.form.number} />
              <input className={style.input} type="text" placeholder={get.form.mail} />
              <button className={style.button} type="button">
                {get.form.textbutton}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
