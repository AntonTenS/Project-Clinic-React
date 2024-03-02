import style from "./faq.module.scss";
import React from "react";
import { useContext } from "react";
import { AuthContext } from "../context";
import { Faqitem } from "./faqitem.jsx";

function Faq() {
  const get = useContext(AuthContext);

  if (!get) {
    return <div>Загрузка текста...</div>;
  }
  return (
    <div className={style.container}>
      <div className={style.flex}>
        <div className={style.paddingX}>
          <p className={style.title}>{get.faq.title}</p>
        </div>
        {Object.keys(get.faq.faqs).map((key, index) => (
          <Faqitem key={index} object={key} index={index} />
        ))}
      </div>
    </div>
  );
}

export default Faq;
