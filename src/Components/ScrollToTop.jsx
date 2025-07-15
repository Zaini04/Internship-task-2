import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth", // use "auto" if you don't want animation
    });
  }, [pathname]);

  return null;
}

export default ScrollToTop;
