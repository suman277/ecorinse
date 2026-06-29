import React from "react";
import { Services } from "./ServiceUtils";
import style from "./Services.module.css";

const ServiceCard = ({heading, subHeading}) => {
  return (
    <div className={style.servicesContainer}>
      <div className={style.serviceHeader}>
        <h1 className={style.Heading}>{heading}</h1>
        {subHeading && <h3 className={style.subHeading}>{subHeading}</h3>}
        {!subHeading && <div className={style.serviceBar}></div>}
      </div>
      <div className={style.serviceSubContainer}>
        {Services.map((service) => {
          const imageSrc = service.img;
          return (
            <div className={style.serviceCard}>
              <div className={style.imageContainer}>
                <img src={imageSrc} />
              </div>
              <div className={style.details}>
                <div className={style.heading}>{service.heading}</div>
                <div className={style.serviceBar}></div>
                <div>{service.detail}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ServiceCard;
