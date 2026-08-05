import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      requestAnimationFrame(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      });
    } else {
      window.scrollTo({
        top: 0,
        behavior: "auto",
      });
    }
  }, [pathname, hash]);
  return null;
};

export default ScrollToTop;
