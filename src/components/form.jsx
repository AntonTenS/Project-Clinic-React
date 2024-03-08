import style from "./form.module.scss";
import React from "react";
import { useContext } from "react";
import { AuthContext } from "../context";

export function Form({ formactiv, setFormactiv }) {
  const get = useContext(AuthContext);

  if (!get) {
    return <div>Загрузка текста...</div>;
  }

  return (
    <div className={formactiv ? style.blockgreen : style.noneblockgreen}>
      <div className={style.concenter}>
        <form className={style.form} action="" method="">
          <div className={style.flexblock}>
            <div className={style.blockclose}>
              <button type="button" className={style.buttonclose} onClick={setFormactiv}></button>
            </div>
            <div className={style.blockform}>
              <div className={style.flex}>
                <div className={style.left}>
                  <p className={style.textbolt}>{get.form.title}</p>
                  <p className={style.textlittle}>{get.form.discription}</p>
                </div>
                <div className={style.right}>
                  <input className={style.input} type="text" required placeholder={get.form.fio} />
                  <input className={style.input} type="phone" required placeholder={get.form.number} />
                  <input className={style.input} type="mail" required placeholder={get.form.mail} />
                  <button className={style.button} type="submit">
                    {get.form.textbutton}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
