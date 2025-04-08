import React, { useContext } from "react";
import Marquee from "react-fast-marquee";
import Swiper_card_univer from "../components/swiper_card_univer";
import Text from "../components/txt";
import "../App.css";

// univer images
import univ1 from "../assets/tokyo_univer.jpg";
import univ2 from "../assets/pacific-univer.jpg";
import univ3 from "../assets/ecenomik_univer.png";
import Btn from "../components/btn";
import { Modal_togle } from "../App";

export default function Univer_section() {
  const { setModalTogle } = useContext(Modal_togle);

  return (
    <div className="univer-section flex flex-col justify-center items-center gap-[18px] ">
      <Text txt="grantga-yordam" id_name="univer-section-title" />

      <Marquee
        direction="left"
        speed={80}
        pauseOnHover={true}
        gradient={false}
        loop={0} // 0 means infinite loop
      >
        <Swiper_card_univer
          card_img={univ1}
          card_title="tokyo-univer"
          card_txt="tokyo-univer-txt"
        />
        <Swiper_card_univer
          card_img={univ2}
          card_title="pacific-univer"
          card_txt="pacific-univer-txt"
        />
        <Swiper_card_univer
          card_img={univ3}
          card_title="economic-univer"
          card_txt="economic-univer-txt"
        />
        <Swiper_card_univer
          card_img={univ1}
          card_title="tokyo-univer"
          card_txt="tokyo-univer-txt"
        />
        <Swiper_card_univer
          card_img={univ2}
          card_title="pacific-univer"
          card_txt="pacific-univer-txt"
        />
        <Swiper_card_univer
          card_img={univ3}
          card_title="economic-univer"
          card_txt="economic-univer-txt"
        />
        <Swiper_card_univer
          card_img={univ1}
          card_title="tokyo-univer"
          card_txt="tokyo-univer-txt"
        />
        <Swiper_card_univer
          card_img={univ2}
          card_title="pacific-univer"
          card_txt="pacific-univer-txt"
        />
        <Swiper_card_univer
          card_img={univ3}
          card_title="economic-univer"
          card_txt="economic-univer-txt"
        />
        <Swiper_card_univer
          card_img={univ1}
          card_title="tokyo-univer"
          card_txt="tokyo-univer-txt"
        />
        <Swiper_card_univer
          card_img={univ2}
          card_title="pacific-univer"
          card_txt="pacific-univer-txt"
        />
        <Swiper_card_univer
          card_img={univ3}
          card_title="economic-univer"
          card_txt="economic-univer-txt"
        />
      </Marquee>

      <Marquee
        direction="right"
        speed={80}
        pauseOnHover={true}
        gradient={false}
        loop={0} // 0 means infinite loop
      >
        <Swiper_card_univer
          card_img={univ1}
          card_title="tokyo-univer"
          card_txt="tokyo-univer-txt"
        />
        <Swiper_card_univer
          card_img={univ2}
          card_title="pacific-univer"
          card_txt="pacific-univer-txt"
        />
        <Swiper_card_univer
          card_img={univ3}
          card_title="economic-univer"
          card_txt="economic-univer-txt"
        />
        <Swiper_card_univer
          card_img={univ1}
          card_title="tokyo-univer"
          card_txt="tokyo-univer-txt"
        />
        <Swiper_card_univer
          card_img={univ2}
          card_title="pacific-univer"
          card_txt="pacific-univer-txt"
        />
        <Swiper_card_univer
          card_img={univ3}
          card_title="economic-univer"
          card_txt="economic-univer-txt"
        />
        <Swiper_card_univer
          card_img={univ1}
          card_title="tokyo-univer"
          card_txt="tokyo-univer-txt"
        />
        <Swiper_card_univer
          card_img={univ2}
          card_title="pacific-univer"
          card_txt="pacific-univer-txt"
        />
        <Swiper_card_univer
          card_img={univ3}
          card_title="economic-univer"
          card_txt="economic-univer-txt"
        />
        <Swiper_card_univer
          card_img={univ1}
          card_title="tokyo-univer"
          card_txt="tokyo-univer-txt"
        />
        <Swiper_card_univer
          card_img={univ2}
          card_title="pacific-univer"
          card_txt="pacific-univer-txt"
        />
        <Swiper_card_univer
          card_img={univ3}
          card_title="economic-univer"
          card_txt="economic-univer-txt"
        />
      </Marquee>

      <Btn
        txt="boglanish"
        id_name="univer-section-btn"
        togle_functions={() => setModalTogle(true)}
      />
    </div>
  );
}
