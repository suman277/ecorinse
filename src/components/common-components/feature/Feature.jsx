import React from "react";
import style from "./Feature.module.css";
import { ProcessDetails } from "../../home/HomePageUtils";

const Feature = ({
  header,
  details,
  isIconInCircle,
  borderTop,
  stroke,
  size,
  logoColor,
  headingColor,
  topHeadingColour,
  includeBorderRadius,
  isGrid,
  minWidth,
}) => {
  return (
    <div
      className={`${style.processSection} ${includeBorderRadius ? style.includeBorderRadius : " "}`}
    >
      {header && (
        <p className={style.processHeader} style={{ color: headingColor }}>
          {header}
        </p>
      )}
      <div className={style.processDetailWrapper}>
        {details.map((process) => {
          const Icon = process.icon;
          return (
            <div
              style={{ minWidth: minWidth }}
              className={`${style.processWrapper} ${
                borderTop ? style.borderTop : style.borderBottom
              }`}
            >
              <div className={isIconInCircle ? style.processIcon : ""}>
                {Icon ? (
                  <Icon color={logoColor} size={size} strokeWidth={stroke} />
                ) : (
                  <p
                    className={style.processHeading}
                    style={{ color: topHeadingColour }}
                  >
                    {process.topheading}
                  </p>
                )}
              </div>
              <p className={style.processHeading}>{process.heading}</p>
              <p>{process.detail}</p>
              {process.path && 
                <button className={style.linkDetails
                }>{process.linkDetails}</button>}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Feature;
