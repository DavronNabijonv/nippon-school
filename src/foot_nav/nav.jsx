import React, { useState } from "react";
import "../App.css";
import Text from "../components/txt";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

// images and icons
import logo from "../assets/logo.png";
import en from "../assets/en.png";
import ru from "../assets/ru.png";
import uz from "../assets/uz.png";
import { IoMenuSharp, IoClose } from "react-icons/io5";

export default function Navbar() {
  const [navTogle, setNavTogle] = useState(false);
  const { i18n } = useTranslation();

  const handleTogle = () => setNavTogle(!navTogle);

  //   change language function
  const handleChange = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div className="w-full">
      <div className="container">
        <div className="navbar flex justify-between items-center ">
            
          <div className="logo flex gap-[5px] w-[200px] items-center ">
            <NavLink to={"/home"}>
              <img
                src={logo}
                loading="lazy"
                className="w-[100px]"
                alt="logo image"
              />
            </NavLink>
            <Text txt="markaz" id_name="logo-txt" />
          </div>

          <div className="links flex gap-[20px]">
            <LinksGroup hovBool={true} />
          </div>

          <div className="changeLang flex gap-[10px] ">
            <button
              className=" w-[20px] border-none bg-none  "
              onClick={() => handleChange("en")}
            >
              <img
                src={en}
                className="w-[20px]"
                loading="lazy"
                alt="english language"
              />
            </button>
            <button
              className=" w-[20px] border-none bg-none "
              onClick={() => handleChange("ru")}
            >
              <img
                src={ru}
                className="w-[20px]"
                loading="lazy"
                alt="english language"
              />
            </button>
            <button
              className=" w-[20px] border-none bg-none "
              onClick={() => handleChange("uz")}
            >
              <img
                src={uz}
                className="w-[20px]"
                loading="lazy"
                alt="english language"
              />
            </button>
            <button onClick={handleTogle} className="togle-btn text-[28px] ">
              <IoMenuSharp />
            </button>
          </div>

          <div className="phoneNumbers">
            <p className="text-gray-600 text-[16px] ">{`+998 (95) 325 5000 `}</p>
            <p className="text-gray-600 text-[16px] ">{`+998 (90) 447 7000 `}</p>
          </div>

          <div className={navTogle?'phone-navbar active':"phone-navbar"} >
            <div onClick={handleTogle} className="w-full text-[35px] flex justify-end " >
              <IoClose />
            </div>
            <div className="phone-links text-center flex flex-col gap-[30px] ">
              <LinksGroup hovBool={false} navTogleBtn={handleTogle} />
            </div>
            <div className="phoneNav-numbers" onClick={handleTogle} >
              <p className="text-gray-600 text-[16px] ">{`+998 (95) 325 5000 `}</p>
              <p className="text-gray-600 text-[16px] ">{`+998 (90) 447 7000 `}</p>
            </div>
          </div>
        </div>
      </div>
      <div className={navTogle?" overflow active ":"overflow"} onClick={handleTogle} ></div>
    </div>
  );
}

function LinksGroup({hovBool,navTogleBtn}) {
  return (
    <>
      <NavLink to={"/negabiz"} onClick={navTogleBtn} >
        <Text
          txt="nega_biz"
          id_name="navlink-txt"
          t_hover={hovBool}
          t_color="text-gray-600"
        />
      </NavLink>
      <NavLink to={"/natija"} onClick={navTogleBtn} >
        <Text
          txt="natijalar"
          id_name="navlink-txt"
          t_hover={hovBool}
          t_color="text-gray-600"
        />
      </NavLink>
      <NavLink to={"/kurslar"} onClick={navTogleBtn} >
        <Text
          txt="kurslar"
          id_name="navlink-txt"
          t_hover={hovBool}
          t_color="text-gray-600"
        />
      </NavLink>
      <NavLink to={"/savollar"} onClick={navTogleBtn} >
        <Text
          txt="savollar"
          id_name="navlink-txt"
          t_hover={hovBool}
          t_color="text-gray-600"
        />
      </NavLink>
    </>
  );
}
