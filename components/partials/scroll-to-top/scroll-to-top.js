import { useEffect, useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";
import { useRouter } from "next/router";
function ScrollToTop({ history }) {
  const { pathname } = useRouter();

  useLayoutEffect(() => {
    // console.log("Scroll To Top Working");
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default ScrollToTop;
