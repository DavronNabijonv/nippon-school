import React, { useEffect, useState } from "react";
import Text from "../components/txt";
import "../App.css";

// import Swiper core and required modules
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

//  news swiper images
import special from "../assets/special.jpg";
import n5 from "../assets/n5.jpg";
import n4 from "../assets/n4.jpg";
import n3 from "../assets/n3.jpg";
import Swiper_kurslar_cards from "../components/swiper_grp_card";

export default function Kurs_section() {
  const [inWidth, setInWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setInWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  if (inWidth <= 1146) {
  }
  return (
    <div className="kurslar flex flex-col justify-center ">
      <Text txt="kurslar-turlar" id_name="kurs-section-title" />
      <div className="container ">
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={inWidth<410?20:0}
          centeredSlides={true}
          slidesPerView={
            inWidth <= 755
              ? 1
              : inWidth <= 940
              ? 2
              : inWidth <= 1146
              ? 2.5
              : 3
          }
          pagination={{ clickable: true }}
          loop={true}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          className="kurs-swiper"
          id="kurs-swiper"
        >
          <SwiperSlide>
            <Swiper_kurslar_cards
              kurs_dav="stajyor-davomiyligi"
              kurs_img={special}
              kurs_title="stajyor"
              kurs_txt="stajyor-txt"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Swiper_kurslar_cards
              kurs_dav="n5-davomiyligi"
              kurs_img={n5}
              kurs_title="n5"
              kurs_txt="n5-txt"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Swiper_kurslar_cards
              kurs_dav="n4-davomiyligi"
              kurs_img={n4}
              kurs_title="n4"
              kurs_txt="n4-txt"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Swiper_kurslar_cards
              kurs_dav="n3-davomiyligi"
              kurs_img={n3}
              kurs_title="n3"
              kurs_txt="n3-txt"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
