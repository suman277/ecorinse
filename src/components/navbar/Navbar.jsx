import React from "react";
import { useEffect, useState } from "react";
import style from "./Navbar.module.css";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import MainLogo from "../../assets/images/navbar/MainLogo.jpeg";
import EcoLogo from "../../assets/images/navbar/EcoLogo.png";
import Logo from "../../assets/images/navbar/Logo.png";
import { NavbarDetails, labelDetails } from "./NavbarUtils";
import { Menu } from "lucide-react";

const Navbar = () => {
  const navigate = useNavigate();
  const [toggle, setToggle] = useState(false);
  const toogleMenu = () => {
    setToggle(!toggle);
  };
  const isMobile = window.innerWidth <= 678;
  return (
    <>
      <div className={style.navbarContainer}>
        <div className={style.firstSubContainer}>
          <div className={style.imageContainer} onClick={() => navigate("/")}>
            <img className={style.imagePlaceholder} src={EcoLogo} />
            {/* <img className={style.iconPlaceholder} src={Logo} /> */}
          </div>
          <div className={style.menuOption} onClick={toogleMenu}>
            <Menu />
          </div>
          <div className={style.navBarLists}>
            {NavbarDetails.map((nav, index) => {
              return (
                <NavLink
                  key={nav.path}
                  to={nav.path}
                  className={({ isActive }) =>
                    isActive ? style.active : style.inactive
                  }
                >
                  {nav.title}
                </NavLink>
              );
            })}
            <div className={style.bookNow} onClick={() => navigate("/order")}>
              Schedule A Pickup
            </div>
          </div>
        </div>
        {toggle && (
          <div className={style.navBarWidthOnMedia}>
            {NavbarDetails.map((nav, index) => {
              return (
                <NavLink
                  key={nav.path}
                  onClick={() => setToggle(false)}
                  to={nav.path}
                  className={({ isActive }) =>
                    isActive ? style.active : style.inactive
                  }
                >
                  {nav.title}
                </NavLink>
              );
            })}
          </div>
        )}
      </div>
      <div className={style.banner}>
        {labelDetails
          .filter((item) => !(isMobile && item.hideOnMobile))
          .map((detail, index) => {
            const Icon = detail.icon;

            return (
              <a
                target="_blank"
                href={detail.path}
                key={index}
                className={style.labelDetails}
              >
                <Icon size={12} />
                {detail.detail}
              </a>
            );
          })}
      </div>
    </>
  );
};

export default Navbar;
