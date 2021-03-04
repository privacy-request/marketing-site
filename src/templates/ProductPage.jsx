import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";
import Layout from "../components/Layout";
import SEO from "../components/SEO/SEO";
import Image from "../components/Image";
import TrustedCustomers from "../components/TrustedCustomers";
import ProductPerks from "../components/ProductPage/ProductPerks";
import Illustration from "../components/Illustration";
import BookADemo from "../components/BookADemo";
import { STATIC_ROUTES, SCREEN_SIZES } from "../components/utils/constants";
import {
  ProductPageHeadline,
  ProductPageSubheadline,
  CallToAction,
} from "../components/typography";

const Wrapper = styled.main`
  max-width: ${({ theme }) => theme.width.productPage};
  margin: auto;
`;

const HeroBackgroundImage = styled(Image)`
  top: -145px;
  display: flex;
  position: absolute;
  width: 143.3rem;
  height: 509px;
  z-index: -1;
  opacity: 0.55;
`;

const Hero = styled.header`
  max-width: 82rem;
  min-height: 23rem;
  margin: 3rem auto 7.5rem auto;
  text-align: center;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  align-items: center;
  position: relative;
`;
const Icon = styled.img`
  margin-right: 1.2rem;
`;

const ProductPage = ({ data, path }) => {
  const {
    description,
    keywords,
    title,
    body,
    headline,
    heroBackgroundImage,
    subheadline,
  } = data.productPage.data;
  const { callToAction, callToActionIcon } = data.homepage.edges[0].node.data;
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
          <CallToAction to={STATIC_ROUTES.CALENDAR}>
            <Icon src={callToActionIcon.url} />
            {callToAction.text}
          </CallToAction>
          <HeroBackgroundImage image={heroBackgroundImage} />
        </Hero>
        <TrustedCustomers centerText />
        <ProductPerks perks={body} />
        <BookADemo />
      </Wrapper>
    </Layout>
  );
};

// TODO: Move Call to action text and icon to its own content type
export const productPageQuery = graphql`
  query ProductPage($slug: String) {
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
        heroBackgroundImage: hero_background_image {
          url
          dimensions {
            height
            width
          }
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
              paragraph {
                text
              }
              subheadline1 {
                text
              }
            }
          }
        }
      }
    }
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
          }
        }
      }
    }
  }
`;

export default ProductPage;
