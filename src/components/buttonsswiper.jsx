import { React } from "react";
import { useSwiper } from "swiper/react";
import style from "./buttonsswiper.module.scss";

export function Buttonsswiper() {
  const swiper = useSwiper();

  return (
    <div className={style.con}>
      <button className={style.st} onClick={() => swiper.slidePrev()}></button>
      <button className={style.st2} onClick={() => swiper.slideNext()}></button>
    </div>
  );
}
