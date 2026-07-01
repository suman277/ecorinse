import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import style from "./Floating.module.css";
import { useNavigate } from "react-router-dom";
const FloatingAction = () => {
  const navigate = useNavigate();
  return (
    <div className={style.container}>
      <a
        href="https://wa.me/919556759064"
        target="_blank"
        rel="noreferrer"
        className={style.whatsapp}
      >
        <FaWhatsapp size={30} color="white" />
      </a>
      <div className={style.bookNow} onClick={() => navigate("/order")}>
        Book Now
      </div>
    </div>
  );
};

export default FloatingAction;
