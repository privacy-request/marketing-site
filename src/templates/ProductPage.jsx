import React from "react";
import { graphql } from "gatsby";
import { withPreview } from "gatsby-source-prismic";
import Layout from "../components/Layout/Layout";
import Seo from "../components/SEO/SEO";
import TrustedCustomers from "../components/TrustedCustomers/TrustedCustomers";
import ProductPerks from "../components/ProductPage/ProductPerks";
import BookADemo from "../components/BookADemo/BookADemo";
import {
  ProductPageHeadline,
  ProductPageSubheadline,
} from "../components/typography";
import DemoCTA from "../components/DemoCTA";
import {
  Wrapper,
  HeroBackgroundImage,
  Hero,
} from "../components/ProductPage/ProductPage.styles";

const ProductPage = ({ data, path }) => {
  const {
    page_description,
    page_keywords,
    page_title,
    body,
    headline,
    subheadline,
  } = data.prismicProductPage.data;

  return (
    <Layout
      navigationBarData={data.prismicNavigationBar.data}
      footerData={data.prismicFooter.data}
      cookieBannerData={data.prismicCookieBanner.data}
    >
      <Seo
        title={page_title.text}
        desc={page_description.text}
        path={path}
        keywords={page_keywords}
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
        <BookADemo {...data.prismicMailingListForm.data} />
      </Wrapper>
    </Layout>
  );
};

export const query = graphql`
  query ProductPageQuery($slug: String) {
    prismicMailingListForm {
      ...BookADemoData
    }
    prismicNavigationBar {
      ...NavigationData
    }
    prismicFooter {
      ...FooterData
    }
    prismicCookieBanner {
      ...CookieBannerData
    }
    prismicProductPage(uid: { eq: $slug }) {
      id
      data {
        headline {
          text
        }
        page_title {
          text
        }
        page_description {
          text
        }
        page_keywords {
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
              vertical_margin
              horizontal_margin
              vertical_offset
              horizontal_offset
              visual_height
              visual_width
              mobile_width
              illustration_mobile {
                url
                alt
                dimensions {
                  height
                  width
                }
              }
              vertical_margin
              horizontal_margin
              mobile_horizontal_offset
              mobile_vertical_offset
              mobile_vertical_margin
              mobile_horizontal_margin
              mobile_visual_height
              mobile_visual_width
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
              top_illustration {
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
              vertical_margin
              horizontal_margin
              vertical_offset
              horizontal_offset
              visual_height
              visual_width
              mobile_width
              illustration_mobile {
                url
                alt
                dimensions {
                  height
                  width
                }
              }
              vertical_margin
              horizontal_margin
              mobile_horizontal_offset
              mobile_vertical_offset
              mobile_vertical_margin
              mobile_horizontal_margin
              mobile_visual_height
              mobile_visual_width
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
