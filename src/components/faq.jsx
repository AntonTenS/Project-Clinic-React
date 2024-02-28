import style from "./faq.module.scss";
import React from "react";
import { useContext, useState } from "react";
import { AuthContext } from "../context";

function Faq() {
  const get = useContext(AuthContext);
  // const [count, Setcount] = useState(Object.keys(get.faq.faqs).length);
  //const length = Object.keys({ get }).length;
  //const [count, Setcount] = useState(length);

  if (!get) {
    return <div>Загрузка текста...</div>;
  }
  const count = get.faq.faqs;

  return (
    <div className={style.conteiner}>
      <div className={style.flex}>
        <p className={style.title}>{get.faq.title}</p>
        {Object.keys(count).map((key, index) => (
          <div className={style.block} key={index}>
            <p className={style.title}>{count[key].question}</p>
            <p className={style.title}>{count[key].answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Faq;
