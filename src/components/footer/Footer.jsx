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
                {footer.subHeaders.map((util) => {
                  const path = util?.path;
                  if (footer.isNaviagte) {
                    return (
                      <div
                        className={style.detailText}
                        onClick={() => navigate(path)}
                      >
                        {util.detail}
                      </div>
                    );
                  } else {
                    const Icon = util.icon;
                    return (
                      <a
                        className={style.linkDetail}
                        href={util.path}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Icon />
                        <span className={style.detailText}>{util.detail}</span>
                      </a>
                    );
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
              href="https://www.instagram.com/ecorinselaundry/"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram size={24} color="white" />
              <p>Instagram</p>
            </a>
            {/* <a
              className={style.linkItems}
              href="https://wa.me/919556759064"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin size={24} color="white" />
              <p>Linkedin</p>
            </a> */}
            <a
              className={style.linkItems}
              href="https://www.facebook.com/profile.php?id=61592245677432"
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
