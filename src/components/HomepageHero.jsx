import React from "react";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";
import { HomepageHeadline, Paragraph, CallToAction } from "./typography";
import ScreenSize from "./utils/ScreenSize";

const HeroContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 3.9rem;
`;

const Header = styled.header`
  margin: ${({ isMobile }) =>
    !isMobile ? "1.4rem 0rem 0 auto" : "1.4rem 3rem 0 0"};
  max-width: 55rem;
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

const HomepageHero = () => {
  const data = useStaticQuery(query);
  const {
    callToAction,
    callToActionIcon,
    headline,
    heroArt,
    subheadline,
  } = data.homepage.edges[0].node.data;

  const isMobile = ScreenSize();
  return (
    <HeroContainer>
      <Header isMobile={isMobile}>
        <HomepageHeadline>{headline.text}</HomepageHeadline>
        <Paragraph>{subheadline.text}</Paragraph>
        <CallToAction>
          <Icon src={callToActionIcon.url} />
          {callToAction.text}
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
