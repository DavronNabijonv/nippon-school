import React, { useEffect, useState } from "react";
import "./modal.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Text from "../../components/txt";
import { useTranslation } from "react-i18next";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";

import { IoMdClose } from "react-icons/io";
import Btn from "../../components/btn";

export default function Modal_section({ close_func }) {
  const { t } = useTranslation();
  const [value, setValue] = useState();

  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration
      once: true, // animation should happen only once
    });
  }, []);

  return (
    <div
      onClick={close_func}
      className="modal-overflow flex justify-center items-center "
    >
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

        <form className="form-modal flex flex-col gap-[20px] ">
          <input
            type="text"
            placeholder={t("ismingiz")}
            className="modal-input rounded-[8px] border-[1px] border-gray-500 "
          />
          <input
            type="text"
            placeholder={t("ismingiz")}
            className="modal-input rounded-[8px] border-[1px] border-gray-500 "
          />
          <PhoneInput
            defaultCountry="UZ"
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
