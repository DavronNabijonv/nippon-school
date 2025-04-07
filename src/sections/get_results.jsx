import React from "react";
import Marquee from "react-fast-marquee";

//  news swiper images
import result1 from "../assets/result1.jpg";
import result2 from "../assets/result2.jpg";
import result3 from "../assets/result3.jpg";
import Text from "../components/txt";

export default function Get_results() {
  return (
    <div className=" get-result flex flex-col gap-[30px] " >
        <Text txt='natija' id_name='get-result-title' />
      <Marquee
        direction="left"
        speed={80}
        pauseOnHover={false}
        gradient={false}
        loop={0} // 0 means infinite loop
      >
        <img src={result1} alt="photo" className="get-result-img" />
        <img src={result2} alt="photo" className="get-result-img" />
        <img src={result3} alt="photo" className="get-result-img" />
        <img src={result1} alt="photo" className="get-result-img" />
        <img src={result2} alt="photo" className="get-result-img" />
        <img src={result3} alt="photo" className="get-result-img" />
        <img src={result1} alt="photo" className="get-result-img" />
        <img src={result2} alt="photo" className="get-result-img" />
        <img src={result3} alt="photo" className="get-result-img" />
        {/* add more images */}
      </Marquee>
      <Text txt='visa' id_name='get-result-title'  />
      <Marquee
        direction="right"
        speed={80}
        pauseOnHover={false}
        gradient={false}
        loop={0} // 0 means infinite loop
      >
        <img src={result1} alt="photo" className="get-result-img" />
        <img src={result2} alt="photo" className="get-result-img" />
        <img src={result3} alt="photo" className="get-result-img" />
        <img src={result1} alt="photo" className="get-result-img" />
        <img src={result2} alt="photo" className="get-result-img" />
        <img src={result3} alt="photo" className="get-result-img" />
        <img src={result1} alt="photo" className="get-result-img" />
        <img src={result2} alt="photo" className="get-result-img" />
        <img src={result3} alt="photo" className="get-result-img" />
        {/* add more images */}
      </Marquee>
    </div>
  );
}
