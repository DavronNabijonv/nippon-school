import React from "react";
import Translater from "./translater";
import "../App.css";
import '../sections/modal/modal.css'

export default function Text({
  txt,
  id_name,
  t_hover = false,
  t_color = "text-zinc-900",
}) {
  return (
    <p
      id={id_name}
      className={`${t_color} ${t_hover ? `hover:text-green-300` : ""}  `}
    >
      <Translater txt={txt} />
    </p>
  );
}
