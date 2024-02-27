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
  return (
    <div className={style.conteiner}>
      <div className={style.flex}>
        <div className={style.block}>
          <p className={style.title}>{get.faq.title}</p>
        </div>
      </div>
    </div>
  );
}

export default Faq;
