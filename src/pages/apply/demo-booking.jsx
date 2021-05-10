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
  top: -120px;
  display: flex;
  position: absolute;
  width: 143.3rem;
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
  height: 20rem;
  @media only screen and (max-width: ${SCREEN_SIZES.LAPTOP}px) {
    text-align: left;
    padding: 0 3rem;
    align-items: end;
    margin-top: 1rem;
    margin-bottom: 5rem;
  }
`;

const DemoBooking = ({ data }) => {
  const {
    confirmationMessage,
    confirmationHeading,
  } = data.allPrismicCalendarPage.edges[0].node.data;
  return (
    <Layout>
      <Hero>
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
