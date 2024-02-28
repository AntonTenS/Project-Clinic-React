import style from "./faqitem.module.scss";
import React from "react";
import { useContext, useState } from "react";
import { AuthContext } from "../context";

export function Faqitem({ object, index }) {
  const get = useContext(AuthContext);

  if (!get) {
    return <div>Загрузка текста...</div>;
  }
  const [toggle, settoggle] = useState(false);

  const Swith = () => {
    settoggle(!toggle);
  };
  return (
    <div className={style.paddingX}>
      <div className={style.block} key={index}>
        <div className={style.left}>
          <p className={style.question}>{get.faq.faqs[object].question}</p>
          <p className={toggle ? style.answer : style.noanswer}>{get.faq.faqs[object].answer}</p>
        </div>
        <div className={style.right}>
          <div className={style.plus} onClick={Swith}>
            <span className={toggle ? style.novertical : style.vertical}></span>
            <span className={style.gorizontal}></span>
          </div>
        </div>
      </div>
    </div>
  );
}
