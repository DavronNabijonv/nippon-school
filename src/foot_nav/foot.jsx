import React from "react";
import "../App.css";
import "./foot-nav.css";
import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";
import Text from "../components/txt";

// images , logo
import foot_logo from "../assets/footer-logo.png";
import { FaPhone } from "react-icons/fa6";
import { FaTelegramPlane, FaFacebookSquare } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

// <FaFacebookSquare /> <FaPhone /> <FaTelegramPlane /> <RiInstagramFill />

export default function Foot() {
  return (
    <div className="foot-nav w-full bg-[#333333]  ">
      <div className="container flex justify-between items-center ">
        <div className="logo w-[125px] ">
          <Link
            to="home"
            smooth={true}
            duration={500}
            spy={true}
            offset={-80}
            className="text-white cursor-pointer"
          >
            <img src={foot_logo} loading="lazy" alt="footer logo image" />
          </Link>
        </div>

        <div className="link-grp flex gap-[20px] ">
          <LinksGroup hovBool={true} />
        </div>

        <div className="network-btn-grp flex justify-center items-center flex-col gap-[10px] ">
          <div className="network-nav">
            <LinksGroup hovBool={true} />
          </div>
          <div className="btn-grp flex gap-[15px] ">
            <a
              href="tel:+998953255000"
              target="_blank"
              className="network-link text-white text-[20px] "
            >
              <FaPhone />
            </a>
            <a
              href="https://t.me/nipponstudycenter"
              target="_blank"
              className="network-link text-white text-[20px] "
            >
              <FaTelegramPlane />
            </a>
            <a
              href="https://www.instagram.com/nippon.uz/"
              target="_blank"
              className="network-link text-white text-[20px] "
            >
              <RiInstagramFill />
            </a>
            <a
              href="https://www.facebook.com/nippon.uz"
              target="_blank"
              className="network-link text-white text-[20px] "
            >
              <FaFacebookSquare />
            </a>
          </div>
          <Text txt="maxfiy" id_name="foot-maxfiy" t_color="text-gray-500" />
        </div>
      </div>
    </div>
  );
}

function LinksGroup({ hovBool }) {
  return (
    <>
      <Link
        to="negabiz"
        smooth={true}
        duration={500}
        spy={true}
        offset={-80}
        className="text-white cursor-pointer"
      >
        <Text
          txt="nega_biz"
          id_name="navlink-txt"
          t_hover={hovBool}
          t_color="text-white"
        />
      </Link>
      <Link
        to="natija"
        smooth={true}
        duration={500}
        spy={true}
        offset={-80}
        className="text-white cursor-pointer"
      >
        <Text
          txt="natijalar"
          id_name="navlink-txt"
          t_hover={hovBool}
          t_color="text-white"
        />
      </Link>
      <Link
        to="kurslar"
        smooth={true}
        duration={500}
        spy={true}
        offset={-80}
        className="text-white cursor-pointer"
      >
        <Text
          txt="kurslar"
          id_name="navlink-txt"
          t_hover={hovBool}
          t_color="text-white"
        />
      </Link>
      <Link
        to="savollar"
        smooth={true}
        duration={500}
        spy={true}
        offset={-80}
        className="text-white cursor-pointer"
      >
        <Text
          txt="savollar"
          id_name="navlink-txt"
          t_hover={hovBool}
          t_color="text-white"
        />
      </Link>
    </>
  );
}
