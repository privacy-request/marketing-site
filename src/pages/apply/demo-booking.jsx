import { graphql } from "gatsby";
import React from "react";
import Layout from "../../components/Layout/Layout";
import styled from "styled-components";
import {
  ProductPageHeadline,
  ProductPageSubheadline,
} from "../../components/typography";
import { withPreview } from "gatsby-source-prismic";
import { SCREEN_SIZES } from "../../components/utils/constants";
import ProductPageHeroBackground from "../../../assets/productPageHeroBackground.svg";

const HeroBackgroundImage = styled(ProductPageHeroBackground)`
  top: -145px;
  display: flex;
  position: absolute;
  width: 100%;
  height: 509px;
  z-index: -1;
  opacity: 0.55;
`;
const Hero = styled.header`
  max-width: ${({ theme }) => theme.width.productPageHero};
  margin: 4.5rem auto 20rem auto;
  text-align: center;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  align-items: center;
  position: relative;
  height: 21rem;
  @media only screen and (max-width: ${SCREEN_SIZES.LAPTOP}px) {
    padding: 0 3rem;
    margin-top: 4rem;
    margin-bottom: 5rem;
  }
`;

const Emoji = styled.span`
  font-size: 7rem;
  margin-bottom: 0.5rem;
  width: 100%;
`;

const DemoBooking = ({ data }) => {
  const { confirmation_message, confirmation_heading } =
    data.prismicCalendarPage.data;
  return (
    <Layout
      navigationBarData={data.prismicNavigationBar.data}
      footerData={data.prismicFooter.data}
      cookieBannerData={data.prismicCookieBanner.data}
    >
      <Hero>
        <Emoji role="img" aria-label="Party popper">
          &#127881;
        </Emoji>
        <ProductPageHeadline>{confirmation_heading.text}</ProductPageHeadline>
        <ProductPageSubheadline>
          {confirmation_message.text}
        </ProductPageSubheadline>
        <HeroBackgroundImage />
      </Hero>
    </Layout>
  );
};

export const query = graphql`
  query DemoBookingQuery {
    prismicNavigationBar {
      ...NavigationData
    }
    prismicFooter {
      ...FooterData
    }
    prismicCookieBanner {
      ...CookieBannerData
    }
    prismicCalendarPage {
      data {
        confirmation_message {
          text
        }
        confirmation_heading {
          text
        }
      }
    }
  }
`;

export default withPreview(DemoBooking);
