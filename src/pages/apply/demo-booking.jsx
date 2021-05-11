import { graphql } from "gatsby";
import React from "react";
import Layout from "../../components/Layout";
import styled from "styled-components";
import {
  ProductPageHeadline,
  ProductPageSubheadline,
} from "../../components/typography";
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
  const {
    confirmationMessage,
    confirmationHeading,
  } = data.allPrismicCalendarPage.edges[0].node.data;
  return (
    <Layout>
      <Hero>
        <Emoji role="img" aria-label="Party popper">
          &#127881;
        </Emoji>
        <ProductPageHeadline>{confirmationHeading.text}</ProductPageHeadline>
        <ProductPageSubheadline>
          {confirmationMessage.text}
        </ProductPageSubheadline>
        <HeroBackgroundImage />
      </Hero>
    </Layout>
  );
};

export const query = graphql`
  query DemoBookingQuery {
    allPrismicCalendarPage {
      edges {
        node {
          data {
            confirmationMessage: confirmation_message {
              text
            }
            confirmationHeading: confirmation_heading {
              text
            }
          }
        }
      }
    }
  }
`;

export default DemoBooking;
