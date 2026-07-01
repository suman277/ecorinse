import React from "react";
import style from "./ComingSoon.module.css";

const ComingSoon = () => {
  return (
    <div className={style.mainContainer}>
      <div className={style.subContainer}>
        <div className={style.contentWrapper}>
          <span className={style.heading}>We are coming soon</span>
          <span className={style.subHeading}>Please stay tuned</span>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
