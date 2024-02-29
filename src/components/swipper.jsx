import style from "./swipper.module.scss";
import React from "react";
import { useContext } from "react";
import { AuthContext } from "../context";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { useSwiper } from "swiper/react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

function Swipper() {
  const get = useContext(AuthContext);

  if (!get) {
    return <div>Загрузка текста...</div>;
  }
  const swiper = useSwiper();
  return (
    <div className={style.con}>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        //navigation
        navigation={{ nextEl: style.st, prevEl: style.st2 }}
        pagination={{ clickable: true, type: "fraction" }}
        //onSwiper={(swiper) => console.log(swiper)}
        // onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide>
          <div className={style.slide}></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={style.slide}></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={style.slide}></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={style.slide}></div>
        </SwiperSlide>
        <button className={style.st}>pref</button>
        <button className={style.st2}>next</button>
      </Swiper>
    </div>
  );
}

export default Swipper;
