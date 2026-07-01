import { Outlet } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import FloatingAction from "../floating-actions/FloatingAction";

import React from "react";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <FloatingAction />
      <Footer />
    </>
  );
};

export default Layout;
