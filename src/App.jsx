import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/oultet/Layout";
import HomePage from "./components/home/HomePage";
import OurService from "./components/our-services/OurService";
import ComingSoon from "./components/common-components/coming-soon/ComingSoon";
function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="our-services" element={<OurService />} />
          <Route path="order" element={<ComingSoon />} />
          <Route path="contact-us" element={<ComingSoon />} />
          <Route path="about-us" element={<ComingSoon />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
