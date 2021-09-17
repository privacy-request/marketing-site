import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout/Layout";
import Seo from "../components/SEO/SEO";
import {
  Wrapper,
  Ellipse,
  LeftBlob,
  RightBlob,
  HeroBlocks,
  Left,
  Right,
  Content,
} from "../components/OptIn/OptIn.styles";
import isMobileScreen from "../components/utils/isMobileScreen";

const OptIn = ({ data, path }) => {
  const { page_description, page_keywords, page_title } =
    data.prismicOptInPage.data;
  const isMobile = isMobileScreen();
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
        <Content>
          <Left>{!isMobile && <HeroBlocks />}</Left>
          <Right></Right>
        </Content>

        {!isMobile && (
          <>
            <LeftBlob />
            <RightBlob />
          </>
        )}
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
