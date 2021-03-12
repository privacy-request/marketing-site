import React from "react";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";
import { HomepageHeadline, Paragraph, CallToAction } from "../typography";
import { STATIC_ROUTES, SCREEN_SIZES } from "../utils/constants";
import HeroAnimation from "./HeroAnimation";
import isMobileScreen from "../utils/isMobileScreen";

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

const Icon = styled.img`
  margin-right: 1.2rem;
`;

const Subheadline = styled(Paragraph)`
  @media only screen and (max-width: ${SCREEN_SIZES.TABLET}px) {
    margin-bottom: 3.2rem;
  }
`;

const HomepageHero = () => {
  const data = useStaticQuery(query);
  const {
    callToAction,
    callToActionIcon,
    headline,
    subheadline,
  } = data.homepage.edges[0].node.data;
  const isMobile = isMobileScreen();

  return (
    <HeroContainer isMobile={isMobile}>
      <Header isMobile={isMobile}>
        <HomepageHeadline>{headline.text}</HomepageHeadline>
        <Subheadline isMobile={isMobile}>{subheadline.text}</Subheadline>
        <CallToAction to={STATIC_ROUTES.CALENDAR}>
          <Icon src={callToActionIcon.url} />
          {callToAction.text}
        </CallToAction>
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
            callToAction: call_to_action {
              text
            }
            callToActionIcon: call_to_action_icon {
              url
            }
            headline {
              text
            }
            heroArt: hero_art {
              url
              alt
              dimensions {
                height
                width
              }
            }
            subheadline {
              text
            }
          }
        }
      }
    }
  }
`;

export default HomepageHero;
