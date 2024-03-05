import style from "./swipper.module.scss";
import React from "react";
import { useContext, useState } from "react";
import { AuthContext } from "../context";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import img1 from "../images/checkup1.jpg";
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
        //onSwiper={(swiper) => console.log(swiper)}
        // onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide>
          <div className={style.slide}>
            <div className={style.flexmain}>
              <div className={style.left}>
                <div className={style.title}>{get.checkup[1].title}</div>
                <div className={style.subtitle}>{get.checkup[1].subtitle}</div>
                <ul className={style.ul}>
                  <li className={style.li}>{get.checkup[1].list[1]}</li>
                  <li className={style.li}>{get.checkup[1].list[2]}</li>
                  <li className={style.li}>{get.checkup[1].list[3]}</li>
                  <li className={style.li}>{get.checkup[1].list[4]}</li>
                </ul>
                <div className={style.divcast}>
                  <div className={style.casttext}>{get.checkup[1].casttext}</div>
                  <div className={style.castcurrent}>{get.checkup[1].castcurrent}</div>
                  <div className={style.castpast}>{get.checkup[1].castpast}</div>
                </div>
                <div className={style.conforbuttons}>
                  <button className={style.buttonleft}>{get.checkup[1].textbuttonleft}</button>
                  <button className={style.buttonright}>{get.checkup[1].textbuttonright}</button>
                </div>
              </div>
              <div className={style.right}>
                <img className={style.img} src={img1} alt="img1" />
              </div>
            </div>
          </div>
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
      </Swiper>
      <div className={style.conbutton}>
        <button
          className={style.st3}
          onClick={() => {
            swiper.slidePrev();
            setNumbercount(swiper.activeIndex + 1);
            console.log(swiper.activeIndex);
            console.log(swiper.slides.length);
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
            console.log(swiper);
          }}
        ></button>
      </div>
    </div>
  );
}

export default Swipper;
