import React from "react";
import Text from "../components/txt";

export default function Result_section() {
  return (
    <div className="result-num">
      <div className="container">
        <div className="result-title w-full text-center">
          <Text txt="raqam-natija-title" id_name="result-num-title" />
        </div>
        <div className="result-grp flex justify-around items-start ">
          <div className="result-grp-item flex flex-col gap-[15px] justify-start items-center ">
            <p className="num text-[#62afac] flex justify-center items-center ">500+</p>
            <Text
              txt="natija-sert"
              t_color="text-gray-800"
              id_name="result-num-txt"
            />
          </div>
          <div className="result-grp-item flex  gap-[15px] flex-col justify-start items-center ">
            <p className="num text-[#62afac] flex justify-center items-center ">500+</p>
            <Text
              txt="natija-visa"
              id_name="result-num-txt"
              t_color="text-gray-800"
            />
          </div>
          <div className="result-grp-item max-w-[220px] text-center flex flex-col gap-[15px] justify-start items-center ">
            <p className="num text-[#62afac] flex justify-center items-center ">320+</p>
            <Text
              txt="natija-univer"
              id_name="result-num-txt"
              t_color="text-gray-800"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
