import React from "react";
import styled from "styled-components";
import { HomepageHeadline, Paragraph, CallToAction } from "./typography";
import ScreenSize from "./utils/ScreenSize";

const HeroContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: auto;
`;

const Header = styled.header`
  margin: ${({ isMobile }) =>
    !isMobile ? "1.4rem 0rem 0 auto" : "1.4rem 3rem 0 0"};
  max-width: 54rem;
`;

const HeroArt = styled.img`
  width: 100%;
  position: absolute;
  top: -12px;
  right: -52px;
`;

const HeroArtContainer = styled.div`
  width: 100%;
  max-width: 60rem;
  position: relative;
`;

const Icon = styled.img`
  margin-right: 1.2rem;
`;

const HomepageHero = ({
  callToActionText,
  callToActionIcon,
  headline,
  subheadline,
  heroArt,
}) => {
  const isMobile = ScreenSize();
  return (
    <HeroContainer>
      <Header isMobile={isMobile}>
        <HomepageHeadline>{headline}</HomepageHeadline>
        <Paragraph>{subheadline}</Paragraph>
        <CallToAction>
          <Icon src={callToActionIcon.url} />
          {callToActionText}
        </CallToAction>
      </Header>
      {!isMobile && (
        <HeroArtContainer>
          <HeroArt src={heroArt.url} />
        </HeroArtContainer>
      )}
    </HeroContainer>
  );
};

export default HomepageHero;
