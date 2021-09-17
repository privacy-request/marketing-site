import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout/Layout";
import Seo from "../components/SEO/SEO";
import { Wrapper, Ellipse } from "../components/OptIn/OptIn.styles";

const OptIn = ({ data, path }) => {
  const { page_description, page_keywords, page_title } =
    data.prismicOptInPage.data;
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
        <Ellipse />
      </Wrapper>
    </Layout>
  );
};

export const query = graphql`
  query OptInQuery($slug: String) {
    prismicNavigation {
      ...NavigationData
    }
    prismicBookADemoBanner {
      ...BookADemoBannerData
    }
    prismicFooter {
      ...FooterData
    }
    prismicCookieBanner {
      ...CookieBannerData
    }
    prismicOptInPage(uid: { eq: $slug }) {
      uid
      data {
        page_description {
          text
        }
        page_keywords {
          keyword {
            text
          }
        }
        page_title {
          text
        }
      }
    }
  }
`;

export default OptIn;
