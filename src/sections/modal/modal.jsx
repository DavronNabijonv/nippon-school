import React, { useContext, useEffect, useState } from "react";
import "./modal.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Text from "../../components/txt";
import { useTranslation } from "react-i18next";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import axios from "axios";

import { IoMdClose } from "react-icons/io";
import Btn from "../../components/btn";
import { Answer_gender, Request_ans } from "../../App";

export default function Modal_section({ close_func }) {
  const { t } = useTranslation();
  const [value, setValue] = useState();
  const { setAnswerType } = useContext(Answer_gender);
  const { setRequestAns } = useContext(Request_ans);

  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration
      once: true, // animation should happen only once
    });
  }, []);

  const sendMessage = (event) => {
    event.preventDefault();

    const token = "7940057045:AAHRFPvgUCo_7pqpXD6uq4li7-_DYx2J96g"; // Use environment variable
    const chatId = 6134458285;
    const url = `https://api.telegram.org/bot${token}/sendMessage`;

    // Get form data
    const name = event.target.elements.name.value; // Get input by name attribute
    const phoneNumber = event.target.elements.number.value;
    const info_user = `Ism: ${name}, Phone number: ${phoneNumber}`;

    axios
      .post(url, {
        chat_id: chatId,
        text: info_user,
      })
      .then(() => {
        setAnswerType(true);
        event.target.reset(); 
      })
      .catch((error) => {
        console.error("Yuborishda xatolik:", error);
        setAnswerType(false);
      });

    // show Request_answer componenet
    setRequestAns(true);
  };

  return (
    <div
      className="modal-overflow flex justify-center items-center "
    >
      <div className="modal-close-click" onClick={close_func} ></div>
        <div className="modal-grp bg-white max-w-[550px] w-[100%] flex flex-col gap-[22px] rounded-[15px] ">
          <div className="head-modal flex justify-between ">
            <Text txt="boglanish" id_name="modal-boglanish" />
            <span onClick={close_func} className=" text-[20px] ">
              <IoMdClose />
            </span>
          </div>

          <div className="title-modal-grp flex flex-col text-center gap-[15px] ">
            <Text txt="modal-title" id_name="modal-title" />
            <Text txt="modal-txt" id_name="modal-txt" />
          </div>

          <form
            onSubmit={sendMessage}
            className="form-modal flex flex-col gap-[20px] "
          >
            <input
              type="text"
              name="name"
              placeholder={t("ismingiz")}
              className="modal-input rounded-[8px] border-[1px] border-gray-500 "
            />
            <input
              type="text"
              name="telegramUser"
              placeholder={t("telegram")}
              className="modal-input rounded-[8px] border-[1px] border-gray-500 "
            />
            <PhoneInput
              defaultCountry="UZ"
              name="number"
              placeholder="Enter phone number"
              value={value}
              onChange={setValue}
              className="modal-input rounded-[8px] border-[1px] border-gray-500 "
            />
            <Btn txt="boglanish" id_name="modal-btn" />
          </form>
        </div>
    </div>
  );
}
