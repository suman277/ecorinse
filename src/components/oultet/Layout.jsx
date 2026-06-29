import { Outlet } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";

import React from "react";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer/>
    </>
  );
};

export default Layout;
