import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./request_answer.css";

import { IoMdClose } from "react-icons/io";
import { MdError } from "react-icons/md";
import { FaCheck } from "react-icons/fa";

export default function Request_answer({ answer_type , close_func }) {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration
      once: true, // animation should happen only once
    });
  }, []);
  
  return (
    <div className = "main-answer" >
      <div data-aos="fade-left" data-aos-delay="800" >
        <div className=" request-grp rounded-[8px] max-w-[280px] w-[100%] flex flex-col gap-[5px] bg-white ">
          <button onClick={close_func} className=" request-btn border-none text-gray-800 text-[18px] text-black w-[100%] text-right flex justify-end ">
            <IoMdClose />
          </button>
          <div className="answer flex gap-[8px] items-center ">
            <span
              className={`bg-white-900 rounded-[100%] ${
                answer_type ? "text-green-700" : "text-red-700"
              } text-[20px]`}
            >
              {answer_type ? <FaCheck /> : <MdError />}
            </span>
            {answer_type ? "Successfuly" : "Error"}
          </div>
          <div
            className={`animation h-[5px] ${
              answer_type ? "bg-green-300" : "bg-red-300"
            } rounded-[15px]`}
          >
            <div
              className={`decrease-animation h-[5px] ${
                answer_type ? "bg-green-700" : "bg-red-700"
              } `}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}
