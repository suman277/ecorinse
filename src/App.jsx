import { lazy, Suspense, useEffect } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { authService } from "./service/authService";

import Loading from "./components/loader/Loading";
const HomePage = lazy(() => import("./components/home/HomePage"));
const Layout = lazy(() => import("./components/oultet/Layout"));
const OurService = lazy(() => import("./components/our-services/OurService"));
const ComingSoon = lazy(
  () => import("./components/common-components/coming-soon/ComingSoon"),
);
const AboutUs = lazy(() => import("./components/about-us/AboutUs"));
const ContactUs = lazy(() => import("./components/contact-us/ContactUs"));
const TermsConditions = lazy(
  () => import("./components/terms-and-conditions/TermsConditions"),
);
const PrivacyAndPolicy = lazy(
  () => import("./components/privacy-policy/PrivacyAndPolicy"),
);
const Admin = lazy(() => import("./components/admin-component/admin/Admin"));
const CreateOrder = lazy(
  () => import("./components/admin-component/create-order/CreateOrder"),
);
const ViewOrder = lazy(
  () => import("./components/common-components/view-order/ViewOrder"),
);
const AlertComponent = lazy(
  () => import("./components/alert-component/AlertComponent"),
);
const Order = lazy(() => import("./components/create-order/Order"));
const Template = lazy(
  () => import("./components/template/template-builder/Template"),
);
const Login = lazy(() => import("./components/login/Login"));

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
              <Suspense fallback={<Loading makeSpace={true} />}>
                <Admin />
              </Suspense>
            </ProtectedRoute>
          }
        />
        <Route
          path="/view-order"
          element={
            <ProtectedRoute>
              <Suspense fallback={<Loading makeSpace={true} />}>
                <ViewOrder />
              </Suspense>
            </ProtectedRoute>
          }
        />
        <Route
          path="/template"
          element={
            <ProtectedRoute>
              <Suspense fallback={<Loading makeSpace={true} />}>
                <Template />
              </Suspense>
            </ProtectedRoute>
          }
        />
        <Route element={<Layout />}>
          <Route
            index
            element={
              <Suspense fallback={<Loading makeSpace={true} />}>
                <HomePage />
              </Suspense>
            }
          />
          <Route
            path="our-services"
            element={
              <Suspense fallback={<Loading makeSpace={true} />}>
                <OurService />
              </Suspense>
            }
          />
          <Route
            path="order"
            element={
              <Suspense fallback={<Loading makeSpace={true} />}>
                <ComingSoon />
              </Suspense>
            }
          />
          <Route
            path="contact-us"
            element={
              <Suspense fallback={<Loading makeSpace={true} />}>
                <ContactUs />
              </Suspense>
            }
          />
          <Route
            path="about-us"
            element={
              <Suspense fallback={<Loading makeSpace={true} />}>
                <AboutUs />
              </Suspense>
            }
          />
          <Route
            path="terms-cond"
            element={
              <Suspense fallback={<Loading makeSpace={true} />}>
                <TermsConditions />
              </Suspense>
            }
          />
          <Route
            path="privacy-policy"
            element={
              <Suspense fallback={<Loading makeSpace={true} />}>
                <PrivacyAndPolicy />
              </Suspense>
            }
          />
          <Route
            path="create-order"
            element={
              <Suspense fallback={<Loading makeSpace={true} />}>
                <CreateOrder />
              </Suspense>
            }
          />
        </Route>
        <Route
          path="create-orders"
          element={
            <Suspense fallback={<Loading makeSpace={true} />}>
              <Order />
            </Suspense>
          }
        />
        <Route
          path="/login"
          element={
            <Suspense fallback={<Loading makeSpace={true} />}>
              <Login />
            </Suspense>
          }
        />
      </Routes>
    </>
  );
}

export default App;
