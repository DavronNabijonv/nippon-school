import React from "react";
import "./news_swipers.css";

// import Swiper core and required modules
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

//  news swiper images
import news1 from "../assets/news_img1.jpg";
import news2 from "../assets/news_img2.jpg";
import news3 from "../assets/new_img3.jpg";

export default function Kurs_swiper() {
  return (
    <div className="container">
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        loop={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        className="new-swiper"
      >
        <SwiperSlide>
          <img
            src={news1}
            className=" swiper-img rounded-[28px] "
            loading="lazy"
            alt="news images"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={news2}
            className="rounded-[28px] w-[100%] h-[500px] "
            loading="lazy"
            alt="news images"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={news3}
            className="rounded-[28px] w-[100%] h-[500px] "
            loading="lazy"
            alt="news images"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
