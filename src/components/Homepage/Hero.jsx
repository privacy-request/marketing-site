import React from "react";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";
import { Paragraph } from "../typography";
import { SCREEN_SIZES } from "../utils/constants";
import HeroAnimation from "./HeroAnimation";
import isMobileScreen from "../utils/isMobileScreen";
import Headline from "./Headline";
import DemoCTA from "../DemoCTA";

const HeroContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: ${({ theme: { margin } }) => margin.homepageHero.desktop};
  max-width: ${({ theme: { width } }) => width.section};
  margin-left: auto;
  @media only screen and (max-width: ${SCREEN_SIZES.TABLET}px) {
    margin: ${({ theme: { margin } }) => margin.homepageHero.mobile};
  }
`;

const Header = styled.header`
  margin-top: ${({ theme: { margin } }) => margin.homepageHeader};
  margin-left: ${({ theme: { margin } }) => margin.homepageSections};
  max-width: ${({ theme }) => theme.width.sectionColum};
  @media only screen and (max-width: ${SCREEN_SIZES.TABLET}px) {
    margin-top: 0;
  }
`;

const Subheadline = styled(Paragraph)`
  @media only screen and (max-width: ${SCREEN_SIZES.TABLET}px) {
    margin-bottom: 3.2rem;
  }
`;

const HomepageHero = () => {
  const data = useStaticQuery(query);
  const {
    headlinePrefix,
    headlineTypewriter,
    subheadline,
    loop,
    speed,
    delay,
  } = data.homepage.edges[0].node.data;
  const isMobile = isMobileScreen();

  return (
    <HeroContainer isMobile={isMobile}>
      <Header isMobile={isMobile}>
        <Headline
          prefix={headlinePrefix}
          typewriter={headlineTypewriter}
          {...{ loop, speed, delay }}
        />
        <Subheadline isMobile={isMobile}>{subheadline.text}</Subheadline>
        <DemoCTA withIcon />
      </Header>
      {!isMobile && <HeroAnimation />}
    </HeroContainer>
  );
};

const query = graphql`
  query HomepageHeroQuery {
    homepage: allPrismicHomepage {
      edges {
        node {
          data {
            headlinePrefix: headline_prefix {
              text
            }
            headlineTypewriter: headline_typewriter {
              word {
                text
              }
            }
            subheadline {
              text
            }
            loop: loop_words
            speed: typing_speed
            delay: backspace_delay
          }
        }
      }
    }
  }
`;

export default HomepageHero;
