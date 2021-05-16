import React from "react";
import { graphql } from "gatsby";
import { HomepageSubHeadline } from "../../typography";
import HeroAnimation from "./HeroAnimation";
import isMobileScreen from "../../utils/isMobileScreen";
import Headline from "./Headline";
import DemoCTA from "../../DemoCTA";
import { HeroContainer, Header } from "./Hero.styles";

export const query = graphql`
  fragment HeroData on PrismicHomepage {
    data {
      headline_prefix {
        text
      }
      headline_typewriter {
        word {
          text
        }
      }
      subheadline {
        text
      }
      loop_words
      typing_speed
      backspace_delay
    }
  }
`;

const HomepageHero = ({
  headline_prefix,
  headline_typewriter,
  subheadline,
  loop_words,
  typing_speed,
  backspace_delay,
}) => {
  const isMobile = isMobileScreen();
  return (
    <HeroContainer isMobile={isMobile}>
      <Header isMobile={isMobile}>
        <Headline
          prefix={headline_prefix}
          typewriter={headline_typewriter}
          loop={loop_words}
          speed={typing_speed}
          delay={backspace_delay}
          {...{ loop_words, typing_speed, backspace_delay }}
        />
        <HomepageSubHeadline isMobile={isMobile}>
          {subheadline.text}
        </HomepageSubHeadline>
        <DemoCTA withIcon />
      </Header>
      {!isMobile && <HeroAnimation />}
    </HeroContainer>
  );
};

export default HomepageHero;
