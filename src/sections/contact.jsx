import React, { useContext } from "react";
import Btn from "../components/btn";
import { useTranslation } from "react-i18next";
import axios from "axios";
import Text from "../components/txt";
import "../App.css";
import { Answer_gender, Request_ans } from "../App";

export default function Contact() {
  const { t } = useTranslation();
  const { setAnswerType } = useContext(Answer_gender);
  const { setRequestAns } = useContext(Request_ans);

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
    <div className="contact ">
      <div className="container">
        <div className="contact-grp flex justify-around items-center flex-wrap gap-[20px] ">
          <div className="contact-txt-grp flex flex-col gap-[20px] ">
            <Text txt="savol-title" id_name="savol-title" />
            <Text txt="savol-txt" id_name="savol-txt" />
          </div>
          <form onSubmit={sendMessage} className="contact-form flex flex-col gap-[20px] ">
            <input
              type="text"
              name="name" // Changed from id to name
              placeholder={t("ismingiz")}
              className=" contact-input bg-[#b5e7bb] text-white rounded-[50px] "
              required
            />
            <input
              type="text"
              name="number" // Changed from id to name
              placeholder={t("tel-nomer")}
              className=" contact-input bg-[#b5e7bb] text-white rounded-[50px] "
              required
            />
            <Btn txt="savol-btn" id_name="contact-btn" />
          </form>
        </div>
      </div>
    </div>
  );
}
