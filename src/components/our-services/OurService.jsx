import React from "react";
import ServiceCard from "../common-components/services/ServiceCard";
import style from "./OurService.module.css";
import Feature from "../common-components/feature/Feature";
import {
  LaundryProcess,
  chooseNeatClean,
  ServiceExcellence,
  ServiceCategories,
} from "../../utils/UtilsData";
import { Check } from "lucide-react";
import LaundryDetails from "../common-components/laundry-details/LaundryDetails";

const OurService = () => {
  return (
    <>
      <ServiceCard
        heading={"From Wash to Wow!!"}
        subHeading={"Our Laundry Services"}
      />
      <div className={style.laundryProcess}>
        <Feature
          header={"The Laundry Process"}
          details={LaundryProcess}
          isIconInCircle={false}
          borderTop={true}
          logoColor={"#488b36"}
          stroke={3}
          size={30}
          headingColor={"white"}
          includeBorderRadius={true}
        />
      </div>
      <div>
        <Feature
          header={"Why Choose Our Services?"}
          details={chooseNeatClean}
          isIconInCircle={false}
          borderTop={true}
          size={30}
          logoColor={"#488b36"}
        />
      </div>
      <div className={style.serviceExcel}>
        <div className={style.serviceHeader}>Our Service Excellence</div>
        <div className={style.serviceWrapper}>
          {ServiceExcellence.map((excel) => {
            return (
              <div className={style.serviceDetailWrapper}>
                <div className={style.heading}>{excel.heading}</div>
                <span className={style.detail}>{excel.detail}</span>
              </div>
            );
          })}
        </div>
      </div>
      <div className={style.serviceCategories}>
        <div className={style.serviceHeader}>Service Categories</div>
        <div className={style.serviceCategoryWrapper}>
          {ServiceCategories.map((category) => {
            return (
              <div className={style.categoryWrapper}>
                <div className={style.categoryHeading}>{category.heading}</div>
                <div className={style.categoryService}>
                  {category.services.map((service) => {
                    return (
                      <>
                        <div className={style.detailCheck}>
                          <Check />
                          {service}
                        </div>
                        <hr></hr>
                      </>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className={style.laundryDetails}>
        <LaundryDetails />
      </div>
    </>
  );
};

export default OurService;
