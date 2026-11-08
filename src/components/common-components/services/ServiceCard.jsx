import React from "react";
import { Services } from "./ServiceUtils";
import style from "./Services.module.css";
import { ChevronRightCircleIcon } from "lucide-react";

const ServiceCard = () => {
  return (
    <div className={style.servicesContainer}>
      <div className={style.serviceHeader}>
        <div className={style.borderDetails}>WHAT WE OFFER</div>
        <h1 className={style.Heading}>Our Services</h1>
        <h3 className={style.subHeading}>
          Professional care for every fabric, every occassion
        </h3>
      </div>
      <div className={style.serviceViewPort}>
        <div className={style.serviceSubContainer}>
          {[...Services, ...Services].map((service, index) => {
            const imageSrc = service.img;
            return (
              <div
                className={style.serviceCard}
                key={index}
                style={{ animationDelay: `0.${index}s` }}
              >
                <div className={style.imageContainer}>
                  <img src={imageSrc} loading="lazy" decoding="async" />
                </div>
                <div className={style.details}>
                  <div className={style.headingDetails}>
                    <div
                      className={style.heading}
                      style={{ animationDelay: `0.${index}s` }}
                    >
                      {service.heading}
                    </div>
                    <div
                      className={style.subDetail}
                      style={{ animationDelay: `0.${index + 1}s` }}
                    >
                      {service.detail}
                    </div>
                  </div>
                  <div className={style.navigateIcon}>
                    <ChevronRightCircleIcon size={"2rem"} color="#498B36" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
