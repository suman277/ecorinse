import {
  createBrowserRouter,
  Navigate,
} from "react-router-dom";

import Layout from "./components/oultet/Layout";
import HomePage from "./components/home/HomePage";

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Navigate to="/home" replace />,
      },
      {
        path: "/home",
        element: <HomePage />,
      },
      {
        path: "/about-us",
        element: <About />,
      },
      {
        path: "/contact-us",
        element: <Contact />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);