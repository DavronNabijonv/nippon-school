import React from "react";
import "../App.css";

// image
import litsenziya from "../assets/litsenziya.jpg";
import Text from "../components/txt";

export default function Licence() {
  return (
    <div className="licence flex flex-col gap-[20px] ">
      <p className="licence-title"><Text txt='litsenziya' /></p>
      <div className="container">
        <div className="licence-grp flex justify-between items-center ">
          <div className=" shadow-img ">
            <img
              src={litsenziya}
              className="w-full h-auto rounded-[25px] "
              loading="lazy"
              alt="litsenziya image"
            />
          </div>
          <div className="licence-txt-grp max-w-[600px] w-full flex flex-col gap-[15px] ">
            <p className="licence-txt-grp-title">
              <Text txt='litsenziya-title' />
            </p>
            <p className="licence-txt">
            <Text txt='litsenziya-txt' />
            </p>
          </div>
          <div className="img-grp">
            <img
              src={litsenziya}
              className="w-full h-auto rounded-[25px] "
              loading="lazy"
              alt="litsenziya image"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
