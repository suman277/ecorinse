import React from "react";
import style from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
import MainLogo from "../../assets/images/navbar/MainLogo.jpeg";
import { NavbarDetails, labelDetails } from "./NavbarUtils";

const Navbar = () => {
  return (
    <>
      <div className={style.navbarContainer}>
        <div className={style.firstSubContainer}>
          <div className={style.imageContainer}>
            <img className={style.imagePlaceholder} src={MainLogo} />
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
