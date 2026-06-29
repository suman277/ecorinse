import React from "react";
import style from "./ComingSoon.module.css";

const ComingSoon = () => {
  return (
    <div className={style.mainContainer}>
      <div className={style.subContainer}>
        <div className={style.contentWrapper}>
          <span style={{ fontSize: "13rem" }}>We are coming soon</span>
          <span style={{ fontSize: "4rem" }}>Please stay tuned</span>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
