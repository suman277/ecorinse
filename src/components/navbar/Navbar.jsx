import React from "react";
import { useEffect, useState } from "react";
import style from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
import MainLogo from "../../assets/images/navbar/MainLogo.jpeg";
import Logo from "../../assets/images/navbar/Logo.png";
import { NavbarDetails, labelDetails } from "./NavbarUtils";
import { Menu } from "lucide-react";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const toogleMenu = () => {
    console.log("I am getting clikced");
    setToggle(!toggle);
  };
  return (
    <>
      <div className={style.navbarContainer}>
        <div className={style.firstSubContainer}>
          <div className={style.imageContainer}>
            <img className={style.imagePlaceholder} src={MainLogo} />
            <img className={style.iconPlaceholder} src={Logo} />
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
        {labelDetails.map((detail, index) => {
          const Icon = detail.icon;
          return (
            <div className={style.labelDetails}>
              <Icon size={12} />
              {detail.detail}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Navbar;
