import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout/Layout";
import Seo from "../components/SEO/SEO";
import PrivacyNav from "../components/LegalPage/PrivacyNav";
import { withPreview } from "gatsby-source-prismic";
import {
  Wrapper,
  Title,
  NavAndContentWrapper,
  Content,
} from "../components/LegalPage/LegalPage.styles";
import SliceZone from "../components/Slices/SliceZone";

const LegalPage = ({ data, path }) => {
  const { page_title, page_description, page_keywords, body, header } =
    data.prismicLegalPage.data;
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
        <Title>{header.text}</Title>
        <NavAndContentWrapper>
          <PrivacyNav
            currentPage={data.prismicLegalPage}
            pages={data.allPrismicLegalPage}
            displayOrder={data.prismicLegalPageNav.data.display_order}
          />
          <Content>
            <SliceZone slices={body} />
          </Content>
        </NavAndContentWrapper>
      </Wrapper>
    </Layout>
  );
};

export const query = graphql`
  query LegalPageQuery($slug: String) {
    prismicNavigationBar {
      ...NavigationData
    }
    prismicFooter {
      ...FooterData
    }
    prismicCookieBanner {
      ...CookieBannerData
    }
    prismicLegalPageNav {
      ...PrivacyNavData
    }
    allPrismicLegalPage {
      edges {
        node {
          data {
            header {
              text
            }
          }
          uid
        }
      }
    }
    prismicLegalPage(uid: { eq: $slug }) {
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
        header {
          text
        }
        body {
          ... on PrismicLegalPageBodyHeading {
            id
            primary {
              heading {
                text
              }
            }
            slice_type
          }
          ... on PrismicLegalPageBodyRichTextSection {
            id
            primary {
              content {
                raw
              }
            }
            slice_type
          }
          ... on PrismicLegalPageBodyTable2Col {
            id
            primary {
              col1 {
                text
              }
              col2 {
                text
              }
            }
            items {
              col1 {
                raw
              }
              col2 {
                raw
              }
            }
            slice_type
          }
          ... on PrismicLegalPageBodyTable5Col {
            id
            primary {
              col1 {
                text
              }
              col2 {
                text
              }
              col3 {
                text
              }
              col4 {
                text
              }
              col5 {
                text
              }
            }
            items {
              col1 {
                raw
              }
              col2 {
                raw
              }
              col3 {
                raw
              }
              col4 {
                raw
              }
              col5 {
                raw
              }
            }
            slice_type
          }
        }
      }
    }
  }
`;

export default withPreview(LegalPage);
