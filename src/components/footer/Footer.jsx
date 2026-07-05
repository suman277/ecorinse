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
        <div className={style.socialLinks}>
          <div className={style.socialHeading}>Social Links</div>
          <div className={style.socialItems}>
            <a
              className={style.linkItems}
              href="https://wa.me/919556759064"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram size={24} color="white" />
              <p>Instagram</p>
            </a>
            <a
              className={style.linkItems}
              href="https://wa.me/919556759064"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin size={24} color="white" />
              <p>Linkedin</p>
            </a>
            <a
              className={style.linkItems}
              href="https://wa.me/919556759064"
              target="_blank"
              rel="noreferrer"
            >
              <FaFacebook size={24} color="white" />
              <p>Facebook</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
