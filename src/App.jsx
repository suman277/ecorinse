import { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
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
import Order from "./components/create-order/Order";
import Template from "./components/template/template-builder/Template";
import Login from "./components/login/Login";
import { authService } from "./service/authService";
import { useLocation } from "react-router-dom";

const getStoredTokenDetails = () => {
  try {
    return JSON.parse(localStorage.getItem("tokenDetails"));
  } catch {
    return null;
  }
};

const isValidTokenDetails = (tokenDetails) =>
  Boolean(tokenDetails?.access_token);

const setAuthServiceToken = (tokenDetails) => {
  authService.setToken(
    tokenDetails.scheme,
    tokenDetails.access_token,
    tokenDetails.id_token,
    tokenDetails.refresh_token,
    tokenDetails.created_at,
    tokenDetails.expires_at,
  );
};

const storedTokenDetails = getStoredTokenDetails();
if (isValidTokenDetails(storedTokenDetails)) {
  setAuthServiceToken(storedTokenDetails);
}

const ProtectedRoute = ({ children }) => {
  const { response } = useSelector((state) => state.login);
  const tokenDetails = isValidTokenDetails(response)
    ? response
    : getStoredTokenDetails();

  return isValidTokenDetails(tokenDetails) ? (
    children
  ) : (
    <Navigate to="/login" replace />
  );
};

function App() {
  const { response } = useSelector((state) => state.login);
  const location = useLocation();
  useEffect(() => {
    const tokenDetails = isValidTokenDetails(response)
      ? response
      : getStoredTokenDetails();
    if (location.pathname === "/login") {
      if (isValidTokenDetails(tokenDetails)) {
        window.location.replace("/admin");
      }
    }
  }, [location.pathname]);

  useEffect(() => {
    const tokenDetails = isValidTokenDetails(response)
      ? response
      : getStoredTokenDetails();

    if (isValidTokenDetails(tokenDetails)) {
      if (isValidTokenDetails(response)) {
        localStorage.setItem("tokenDetails", JSON.stringify(response));
      }
      setAuthServiceToken(tokenDetails);
    }
  }, [response]);

  return (
    <>
      <AlertComponent />
      <Routes>
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <Admin />
            </ProtectedRoute>
          }
        />
        <Route
          path="/view-order"
          element={
            <ProtectedRoute>
              <ViewOrder />
            </ProtectedRoute>
          }
        />
        <Route
          path="/template"
          element={
            <ProtectedRoute>
              <Template />
            </ProtectedRoute>
          }
        />
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
        <Route path="create-orders" element={<Order />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
