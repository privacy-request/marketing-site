import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout/Layout";
import Seo from "../components/SEO/SEO";
import LegalPageBody from "../components/LegalPage/LegalPageContent";
import assignContent from "../components/LegalPage/assignContent";
import PrivacyNav from "../components/LegalPage/PrivacyNav";
import { withPreview } from "gatsby-source-prismic";
import {
  Wrapper,
  Title,
  NavAndContentWrapper,
  Content,
} from "../components/LegalPage/LegalPage.styles";

const LegalPage = ({ data, path }) => {
  const { page_title, page_description, page_keywords, body, header } =
    data.prismicLegalPage.data;
  const uid = data.prismicLegalPage.uid;
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
          {/* <PrivacyNav currentRoute={uid} />
          <Content>
            <LegalPageBody
              {...{
                first_section,
                last_section,
                body,
                uid,
                sections,
              }}
            />
          </Content> */}
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
          ... on PrismicLegalPageBodyTable2Col {
            id
            primary {
              col1 {
                raw
              }
              col2 {
                raw
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

export default LegalPage;
