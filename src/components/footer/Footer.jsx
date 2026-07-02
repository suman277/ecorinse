import React from "react";
import { FooterUtils } from "../../utils/UtilsData";
import style from "./Footer.module.css";
import { useNavigate } from "react-router-dom";
import { FaInstagram, FaLinkedin, FaFacebook } from "react-icons/fa";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <div className={style.footerContainer}>
      <div className={style.linkPaths}>
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
                        <div style={{ textAlign: "center" }}>
                          {heading.detail}
                        </div>
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
      <div className={style.socialLinks}>
        <div className={style.socialHeading}>Social Links</div>
        <div className={style.socialItems}>
          <a
            href="https://wa.me/919556759064"
            target="_blank"
            rel="noreferrer"
            className={style.whatsapp}
          >
            <FaInstagram size={30} color="white" />
          </a>
          <a
            href="https://wa.me/919556759064"
            target="_blank"
            rel="noreferrer"
            className={style.whatsapp}
          >
            <FaLinkedin size={30} color="white" />
          </a>
          <a
            href="https://wa.me/919556759064"
            target="_blank"
            rel="noreferrer"
            className={style.whatsapp}
          >
            <FaFacebook size={30} color="white" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
