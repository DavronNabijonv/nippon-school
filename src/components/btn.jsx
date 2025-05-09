import React from "react";
import Translater from "./translater";
import "../App.css";
import '../sections/modal/modal.css'

export default function Btn({ txt, id_name , togle_functions }) {
  return (
    <button
      id={id_name}
      onClick={togle_functions}
      className={`rounded-[50px] bg-[#62afac] text-white flex justify-center items-center  `}
    >
      <Translater txt={txt} />
    </button>
  );
}
