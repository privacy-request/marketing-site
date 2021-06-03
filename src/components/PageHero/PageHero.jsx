import React from "react";
import isMobileScreen from "../utils/isMobileScreen";
import { CompanyPageTitle, CompanyPageSubTitle } from "../typography";
import { HeroBackground, Hero } from "./PageHero.styles";

const PageHero = ({ headline, subheadline, className }) => {
  const isMobile = isMobileScreen();
  return (
    <Hero className={className}>
      <CompanyPageTitle>{headline}</CompanyPageTitle>
      <CompanyPageSubTitle>{subheadline}</CompanyPageSubTitle>
      {!isMobile && <HeroBackground />}
    </Hero>
  );
};

export default PageHero;
