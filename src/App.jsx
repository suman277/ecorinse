import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/oultet/Layout";
import HomePage from "./components/home/HomePage";
import OurService from "./components/our-services/OurService";
import ComingSoon from "./components/common-components/coming-soon/ComingSoon";
import AboutUs from "./components/about-us/AboutUs";
import ContactUs from "./components/contact-us/ContactUs";
import TermsConditions from "./components/terms-and-conditions/TermsConditions";
import PrivacyAndPolicy from "./components/privacy-policy/PrivacyAndPolicy";
function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="our-services" element={<OurService />} />
          <Route path="order" element={<ComingSoon />} />
          <Route path="contact-us" element={<ContactUs />} />
          <Route path="about-us" element={<AboutUs />} />
          <Route path="terms-cond" element={<TermsConditions />} />
          <Route path="privacy-policy" element={<PrivacyAndPolicy />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
