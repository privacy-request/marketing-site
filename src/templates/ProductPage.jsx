import {
  Hero,
  HeroBackgroundImage,
  Wrapper,
} from "../components/ProductPage/ProductPage.styles";
import {
  ProductPageHeadline,
  ProductPageSubheadline,
} from "../components/typography";

import BookADemo from "../components/BookADemo/BookADemo";
import DemoCTA from "../components/DemoCTA";
import Layout from "../components/Layout/Layout";
import ProductPerks from "../components/ProductPage/ProductPerks";
import React from "react";
import Seo from "../components/SEO/SEO";
import TrustedCustomers from "../components/TrustedCustomers/TrustedCustomers";
import { graphql } from "gatsby";

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
      navigationData={data.prismicNavigation.data}
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
    prismicNavigation {
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
          ... on PrismicProductPageDataBodyTextWithIllustration {
            id
            slice_type
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
          ... on PrismicProductPageDataBodyTextWithLayeredIllustration {
            id
            slice_type
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
          ... on PrismicProductPageDataBodyTextWithAlternatingIllustration {
            items {
              illustration {
                dimensions {
                  height
                  width
                }
                url
                alt
              }
            }
            id
            slice_type
            primary {
              heading {
                text
              }
              rotation_speed
              vertical_margin
              horizontal_margin
              vertical_offset
              horizontal_offset
              visual_height
              visual_width
              mobile_width
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

export default ProductPage;
