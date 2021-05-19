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
  const {
    page_title,
    page_description,
    page_keywords,
    first_section,
    last_section,
    body,
    prefixWithIndex,
  } = data.prismicLegalPage.data;
  const uid = data.prismicLegalPage.uid;
  const introduction = assignContent(first_section.raw);
  const outro = assignContent(last_section.raw);
  const sections = body.map((section, index) => {
    const tocNumber = index + 1;
    return {
      heading: section.primary.heading.text,
      tocNumber,
      content: section.items.map((subSection, index) =>
        assignContent(subSection.content.raw, {
          subheading: subSection.subheading,
          tocNumber,
          tocSubNumber: index + 1,
          appendToC: prefixWithIndex,
        })
      ),
    };
  });

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
        <Title>{page_title.text}</Title>
        <NavAndContentWrapper>
          <PrivacyNav sections={sections} currentRoute={uid} />
          <Content>
            <LegalPageBody
              {...{
                introduction,
                outro,
                sections,
                uid,
              }}
            />
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
        first_section {
          raw
        }
        last_section {
          raw
        }
        prefix_sections_with_index
        body {
          ... on PrismicLegalPageBodyNumberedSection {
            id
            primary {
              heading {
                text
              }
            }
            items {
              content {
                raw
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

export default withPreview(LegalPage);
