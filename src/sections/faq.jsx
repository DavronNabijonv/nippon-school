import React, { useState } from "react";
import "../App.css";
import Text from "../components/txt";
import { FaPlus } from "react-icons/fa6";

export default function Faq() {
  const [faqTogle, setFaqTogle] = useState({
    one: false,
    two: false,
    three: false,
    four: false,
    five: false,
    six: false,
    seven: false,
    eight: false,
    nine: false,
    ten: false,
  });

  const handleFaq = (key) => {
    setFaqTogle((prev) => {
      const newState = Object.fromEntries(
        Object.keys(prev).map((k) => [k, false])
      );
      newState[key] = !prev[key];
      return newState;
    });
  };

  return (
    <div className="faq-section">
      <Text txt="ko`p-savol" id_name="faq-title" />
      <div className="faq-grp flex flex-col justify-center items-center  ">
        <div className="faq-card max-w-[1000px] w-full   ">

          <div
            className="faq-savol flex justify-between items-center rounded-[10px] bg-white "
            onClick={() => handleFaq("one")}
          >
            <Text txt="ko`p-savol1" id_name="kop-savol" />
            <button id="faq-btn" className={`rounded-[100%] bg-[#62afac] ${faqTogle.one?"rotate-45":""}  text-white text-[20px] flex justify-center items-center `}>
              <FaPlus />
            </button>
          </div>
          <div className={`faq-javob rounded-[15px] ${faqTogle.one? " max-h-[350px] h-[auto] ":"h-[0] opacity-1 "} `}>
            <Text txt="ko`p-savol1-txt" id_name="kop-javob" />
          </div>

          <div
            className="faq-savol flex justify-between items-center rounded-[10px] bg-white "
            onClick={() => handleFaq("two")}
          >
            <Text txt="ko`p-savol2" id_name="kop-savol" />
            <button id="faq-btn" className={`rounded-[100%] bg-[#62afac] ${faqTogle.two?"rotate-45":""} w-[35px] h-[35px] text-white text-[20px] flex justify-center items-center `}>
              <FaPlus />
            </button>
          </div>
          <div className={`faq-javob rounded-[15px] ${faqTogle.two? " max-h-[350px] h-[auto] ":"h-[0] opacity-1 "} `}>
            <Text txt="ko`p-savol2-txt" id_name="kop-javob" />
          </div>

          <div
            className="faq-savol flex justify-between items-center rounded-[10px] bg-white "
            onClick={() => handleFaq("three")}
          >
            <Text txt="ko`p-savol3" id_name="kop-savol" />
            <button id="faq-btn" className={`rounded-[100%] bg-[#62afac] ${faqTogle.three?"rotate-45":""} w-[35px] h-[35px] text-white text-[20px] flex justify-center items-center `}>
              <FaPlus />
            </button>
          </div>
          <div className={`faq-javob rounded-[15px] ${faqTogle.three? " max-h-[350px] h-[auto] ":"h-[0] opacity-1 "} `}>
            <Text txt="ko`p-savol3-txt" id_name="kop-javob" />
          </div>

          <div
            className="faq-savol flex justify-between items-center rounded-[10px] bg-white "
            onClick={() => handleFaq("four")}
          >
            <Text txt="ko`p-savol4" id_name="kop-savol" />
            <button id="faq-btn" className={`rounded-[100%] bg-[#62afac] ${faqTogle.four?"rotate-45":""} w-[35px] h-[35px] text-white text-[20px] flex justify-center items-center `}>
              <FaPlus />
            </button>
          </div>
          <div className={`faq-javob rounded-[15px] ${faqTogle.four? " max-h-[350px] h-[auto] ":"h-[0] opacity-1 "} `}>
            <Text txt="ko`p-savol4-txt" id_name="kop-javob" />
          </div>

          <div
            className="faq-savol flex justify-between items-center rounded-[10px] bg-white "
            onClick={() => handleFaq("five")}
          >
            <Text txt="ko`p-savol5" id_name="kop-savol" />
            <button id="faq-btn" className={`rounded-[100%] bg-[#62afac] ${faqTogle.five?"rotate-45":""} w-[35px] h-[35px] text-white text-[20px] flex justify-center items-center `}>
              <FaPlus />
            </button>
          </div>
          <div className={`faq-javob rounded-[15px] ${faqTogle.five? " max-h-[350px] h-[auto] ":"h-[0] opacity-1 "} `}>
            <Text txt="ko`p-savol5-txt" id_name="kop-javob" />
          </div>

          <div
            className="faq-savol flex justify-between items-center rounded-[10px] bg-white "
            onClick={() => handleFaq("six")}
          >
            <Text txt="ko`p-savol6" id_name="kop-savol" />
            <button id="faq-btn" className={`rounded-[100%] bg-[#62afac] ${faqTogle.six?"rotate-45":""} w-[35px] h-[35px] text-white text-[20px] flex justify-center items-center `}>
              <FaPlus />
            </button>
          </div>
          <div className={`faq-javob rounded-[15px] ${faqTogle.six? " max-h-[350px] h-[auto] ":"h-[0] opacity-1 "} `}>
            <Text txt="ko`p-savol6-txt" id_name="kop-javob" />
          </div>

          <div
            className="faq-savol flex justify-between items-center rounded-[10px] bg-white "
            onClick={() => handleFaq("seven")}
          >
            <Text txt="ko`p-savol7" id_name="kop-savol" />
            <button id="faq-btn" className={`rounded-[100%] bg-[#62afac] ${faqTogle.seven?"rotate-45":""} w-[35px] h-[35px] text-white text-[20px] flex justify-center items-center `}>
              <FaPlus />
            </button>
          </div>
          <div className={`faq-javob rounded-[15px] ${faqTogle.seven? " max-h-[350px] h-[auto] ":"h-[0] opacity-1 "} `}>
            <Text txt="ko`p-savol7-txt" id_name="kop-javob" />
          </div>

          <div
            className="faq-savol flex justify-between items-center rounded-[10px] bg-white "
            onClick={() => handleFaq("eight")}
          >
            <Text txt="ko`p-savol8" id_name="kop-savol" />
            <button id="faq-btn" className={`rounded-[100%] bg-[#62afac] ${faqTogle.eight?"rotate-45":""} w-[35px] h-[35px] text-white text-[20px] flex justify-center items-center `}>
              <FaPlus />
            </button>
          </div>
          <div className={`faq-javob rounded-[15px] ${faqTogle.eight? " max-h-[350px] h-[auto] ":"h-[0] opacity-1 "} `}>
            <Text txt="ko`p-savol8-txt" id_name="kop-javob" />
          </div>

          <div
            className="faq-savol flex justify-between items-center rounded-[10px] bg-white "
            onClick={() => handleFaq("nine")}
          >
            <Text txt="ko`p-savol9" id_name="kop-savol" />
            <button id="faq-btn" className={`rounded-[100%] bg-[#62afac] ${faqTogle.nine?"rotate-45":""} w-[35px] h-[35px] text-white text-[20px] flex justify-center items-center `}>
              <FaPlus />
            </button>
          </div>
          <div className={`faq-javob rounded-[15px] ${faqTogle.nine? " max-h-[350px] h-[auto] ":"h-[0] opacity-1 "} `}>
            <Text txt="ko`p-savol9-txt" id_name="kop-javob" />
          </div>

          <div
            className="faq-savol flex justify-between items-center rounded-[10px] bg-white "
            onClick={() => handleFaq("ten")}
          >
            <Text txt="ko`p-savol10" id_name="kop-savol" />
            <button id="faq-btn" className={`rounded-[100%] bg-[#62afac] ${faqTogle.ten?"rotate-45":""} w-[35px] h-[35px] text-white text-[20px] flex justify-center items-center `}>
              <FaPlus />
            </button>
          </div>
          <div className={`faq-javob rounded-[15px] ${faqTogle.ten? " max-h-[350px] h-[auto] ":"h-[0] opacity-1 "} `}>
            <Text txt="ko`p-savol10-txt" id_name="kop-javob" />
          </div>

        </div>
      </div>
    </div>
  );
}
