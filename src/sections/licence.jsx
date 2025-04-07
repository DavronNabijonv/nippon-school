import React from "react";
import "../App.css";

// image
import litsenziya from "../assets/litsenziya.jpg";

export default function Licence() {
  return (
    <div className="licence flex flex-col gap-[20px] ">
      <p className="licence-title">License</p>
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
              Our center is licensed in accordance with the legislation of the
              Republic of Uzbekistan
            </p>
            <p className="licence-txt">
              Our Nippon Learning Center is a private educational institution
              licensed to conduct extracurricular activities and licensed in
              accordance with the law. This means that you can trust us and
              everything is legal.
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
