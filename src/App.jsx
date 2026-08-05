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
import Admin from "./components/admin-component/admin/Admin";
import CreateOrder from "./components/admin-component/create-order/CreateOrder";
import ViewOrder from "./components/common-components/view-order/ViewOrder";
import AlertComponent from "./components/alert-component/AlertComponent";
function App() {
  return (
    <>
      <AlertComponent/>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="our-services" element={<OurService />} />
            <Route path="order" element={<ComingSoon />} />
            <Route path="contact-us" element={<ContactUs />} />
            <Route path="about-us" element={<AboutUs />} />
            <Route path="terms-cond" element={<TermsConditions />} />
            <Route path="privacy-policy" element={<PrivacyAndPolicy />} />
            <Route path="create-order" element={<CreateOrder />} />
          </Route>
          <Route path="/admin" element={<Admin />} />
          <Route path="view-order" element={<ViewOrder />} />
        </Routes>
    </>
  );
}

export default App;
