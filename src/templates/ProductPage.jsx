import React from "react";
import { graphql } from "gatsby";
import { withPreview } from "gatsby-source-prismic";
import styled from "styled-components";
import Layout from "../components/Layout";
import SEO from "../components/SEO/SEO";
import TrustedCustomers from "../components/TrustedCustomers";
import ProductPerks from "../components/ProductPage/ProductPerks";
import BookADemo from "../components/BookADemo";
import { SCREEN_SIZES } from "../components/utils/constants";
import {
  ProductPageHeadline,
  ProductPageSubheadline,
} from "../components/typography";
import ProductPageHeroBackground from "../../assets/productPageHeroBackground.svg";
import DemoCTA from "../components/DemoCTA";

const Wrapper = styled.main`
  max-width: ${({ theme }) => theme.width.productPage};
  margin: auto;
`;

const HeroBackgroundImage = styled(ProductPageHeroBackground)`
  top: -145px;
  display: flex;
  position: absolute;
  width: 143.3rem;
  height: 509px;
  z-index: -1;
  opacity: 0.55;
`;

const Hero = styled.header`
  z-index: 3;
  max-width: ${({ theme }) => theme.width.productPageHero};
  min-height: 23rem;
  margin: 3rem auto 7.4rem auto;
  text-align: center;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  align-items: center;
  position: relative;
  @media only screen and (max-width: ${SCREEN_SIZES.LAPTOP}px) {
    text-align: left;
    padding: 0 3rem;
    align-items: end;
    margin-top: 1rem;
    margin-bottom: 5rem;
  }
`;

const ProductPage = ({ data, path }) => {
  const {
    description,
    keywords,
    title,
    body,
    headline,
    subheadline,
  } = data.productPage.data;
  return (
    <Layout>
      <SEO
        title={title.text}
        desc={description.text}
        path={path}
        keywords={keywords}
      />
      <Wrapper>
        <Hero>
          <ProductPageHeadline>{headline.text}</ProductPageHeadline>
          <ProductPageSubheadline>{subheadline.text}</ProductPageSubheadline>
          <DemoCTA withIcon />
          <HeroBackgroundImage />
        </Hero>
        <TrustedCustomers centerText />
        <ProductPerks perks={body} />
        <BookADemo />
      </Wrapper>
    </Layout>
  );
};

export const query = graphql`
  query ProductPageQuery($slug: String) {
    productPage: prismicProductPage(uid: { eq: $slug }) {
      id
      data {
        headline {
          text
        }
        title: page_title {
          text
        }
        description: page_description {
          text
        }
        keywords: page_keywords {
          keyword {
            text
          }
        }
        subheadline {
          text
        }

        body {
          ... on PrismicProductPageBodyTextWithIllustration {
            id
            primary {
              heading {
                text
              }
              illustration {
                alt
                dimensions {
                  height
                  width
                }
                url
              }
              verticalMargin: vertical_margin
              horizontalMargin: horizontal_margin
              verticalOffset: vertical_offset
              horizontalOffset: horizontal_offset
              visualHeight: visual_height
              visualWidth: visual_width
              mobileWidth: mobile_width
              mobileIllustration: illustration_mobile {
                url
                alt
                dimensions {
                  height
                  width
                }
              }
              verticalMargin: vertical_margin
              horizontalMargin: horizontal_margin
              mobileHorizontalOffset: mobile_horizontal_offset
              mobileVerticalOffset: mobile_vertical_offset
              mobileVerticalMargin: mobile_vertical_margin
              mobileHorizontalMargin: mobile_horizontal_margin
              mobileVisualHeight: mobile_visual_height
              mobileVisualWidth: mobile_visual_width
              paragraph {
                text
              }
              subheading {
                text
              }
            }
          }
          ... on PrismicProductPageBodyTextWithLayeredIllustration {
            id
            primary {
              heading {
                text
              }
              topIllustration: top_illustration {
                alt
                dimensions {
                  height
                  width
                }
                url
              }
              illustration {
                alt
                dimensions {
                  height
                  width
                }
                url
              }
              verticalMargin: vertical_margin
              horizontalMargin: horizontal_margin
              verticalOffset: vertical_offset
              horizontalOffset: horizontal_offset
              visualHeight: visual_height
              visualWidth: visual_width
              mobileWidth: mobile_width
              mobileIllustration: illustration_mobile {
                url
                alt
                dimensions {
                  height
                  width
                }
              }
              verticalMargin: vertical_margin
              horizontalMargin: horizontal_margin
              mobileHorizontalOffset: mobile_horizontal_offset
              mobileVerticalOffset: mobile_vertical_offset
              mobileVerticalMargin: mobile_vertical_margin
              mobileHorizontalMargin: mobile_horizontal_margin
              mobileVisualHeight: mobile_visual_height
              mobileVisualWidth: mobile_visual_width
              paragraph {
                text
              }
              subheading {
                text
              }
            }
          }
        }
      }
    }
  }
`;

export default withPreview(ProductPage);
