import React from "react";
import styled from "styled-components";
import AboutHeroBackground from "../../assets/aboutHeroBackground.svg";
import FooterPrivacyCenter from "./Layout/Footer/FooterPrivacyCenter/FooterPrivacyCenter";
import isMobileScreen from "./utils/isMobileScreen";
import { CompanyPageTitle, CompanyPageSubTitle } from "./typography";

export const HeroBackground = styled(AboutHeroBackground)`
  position: absolute;
  z-index: -1;
  left: 4rem;
`;

export const Hero = styled.header`
  display: flex;
  justify-content: center;
  flex-direction: column;

  min-height: 30rem;
  width: 73rem;

  margin: 0 auto 6rem auto;
  @media only screen and (max-width: 860px) {
    margin: 1rem 3.2rem 10rem 3.2rem;
    width: auto;
  }
`;

const PageHero = ({ headline, subheadline }) => {
  const isMobile = isMobileScreen();
  return (
    <Hero>
      <CompanyPageTitle>{headline}</CompanyPageTitle>
      <CompanyPageSubTitle>{subheadline}</CompanyPageSubTitle>
      {!isMobile && <HeroBackground />}
    </Hero>
  );
};

export default PageHero;
