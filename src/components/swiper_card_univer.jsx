import React from "react";
import Text from "./txt";
import '../App.css'

export default function Swiper_card_univer({ card_img, card_txt, card_title }) {
  return (
    <div id="card-univer" className=" rounded-[25px] flex flex-col items-start  ">
      <img
        src={card_img}
        loading="lazy"
        alt="univer image"
        className="card-univer-img w-[100%] "
      />
      <div className="card-grp flex flex-col ">
        <Text txt={card_title} id_name="card-univer-title" />
        <Text t_color="text-gray-600" txt={card_txt} id_name="card-univer-txt" />
      </div>
    </div>
  );
}
