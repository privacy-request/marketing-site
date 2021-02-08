import { useEffect, useState } from "react";
import { SCREEN_SIZES } from "./constants";

const IsMobileScreen = () => {
  const [isMobile, setIsMobile] = useState(false);
  const handleWindowResize = () => {
    const mobileThresholdMet = window.innerWidth < SCREEN_SIZES.LAPTOP;
    mobileThresholdMet !== isMobile && setIsMobile(mobileThresholdMet);
  };

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    handleWindowResize();
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  });

  return isMobile;
};

export default IsMobileScreen;
