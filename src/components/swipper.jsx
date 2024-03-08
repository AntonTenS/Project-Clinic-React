import style from "./swipper.module.scss";
import React from "react";
import { useContext, useState } from "react";
import { AuthContext } from "../context";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiperitem } from "./swiperitem.jsx";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

function Swipper({ setFormactiv }) {
  const get = useContext(AuthContext);

  if (!get) {
    return <div>Загрузка текста...</div>;
  }
  const [swiper, setSwiper] = useState();
  const [numbercount, setNumbercount] = useState(1);
  const [length, setLength] = useState(Object.keys(get.checkup).length);
  return (
    <div className={style.con}>
      <Swiper
        onSwiper={setSwiper}
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        //navigation
        //navigation={{ nextEl: style.st, prevEl: style.st2 }}
        //pagination={{ clickable: true, type: "fraction" }}
        // onSwiper={(swiper) => setNumbercount(swiper.activeIndex + 1)}
        onSlideChange={() => setNumbercount(swiper.activeIndex + 1)}
      >
        {Object.keys(get.checkup).map((key, index) => (
          <SwiperSlide key={index}>
            <Swiperitem key={index} object={key} index={index} setFormactiv={setFormactiv} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className={style.conbutton}>
        <button
          className={style.st3}
          onClick={() => {
            swiper.slidePrev();
            setNumbercount(swiper.activeIndex + 1);
            // console.log(swiper.activeIndex);
            // console.log(swiper.slides.length);
          }}
        ></button>
        <div className={style.counter}>
          <span className={style.countertextbolt}>{numbercount}</span>/<span className={style.countertextlast}>{length}</span>
        </div>
        <button
          className={style.st2}
          onClick={() => {
            swiper.slideNext();
            setNumbercount(swiper.activeIndex + 1);
            // console.log(swiper);
          }}
        ></button>
      </div>
    </div>
  );
}

export default Swipper;
