import React from "react";
import { FooterUtils } from "../../utils/UtilsData";
import style from "./Footer.module.css";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <div className={style.footerContainer}>
      {FooterUtils.map((footer) => {
        return (
          <div className={style.detailsWrapper}>
            <span className={style.heading}>{footer.heading}</span>
            <div className={style.subHeaderWrapper}>
              {footer.subHeaders.map((heading) => {
                if (heading.path) {
                  const path = heading.path;
                  return (
                    <div
                      className={style.pathClicker}
                      onClick={() => navigate(path)}
                    >
                      {heading.detail}
                    </div>
                  );
                }
                if (heading.icon) {
                  const Icon = heading.icon;
                  return (
                    <div className={style.iconWrapper}>
                      <div>
                        <Icon />
                      </div>
                      <div>{heading.detail}</div>
                    </div>
                  );
                } else {
                  return <div className={style.detail}>{heading.detail}</div>;
                }
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Footer;
