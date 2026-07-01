import React from "react";
import style from "./WidthFeature.module.css";

const WidthFeature = ({heading, details}) => {
  return (
    <div className={style.mainContainer}>
      {heading && <div className={style.headingText}>{heading}</div>}
      {details.map((detail) => {
        const Icon = detail.icon;
        return (
          <div className={style.detailWrapper}>
            <div>
              <Icon strokeWidth={3} size={30} color={"#2B6BBD"}/>
            </div>
            <div className={style.heading}>{detail.heading}</div>
            <div>{detail.detail}</div>
          </div>
        );
      })}
    </div>
  );
};

export default WidthFeature;
