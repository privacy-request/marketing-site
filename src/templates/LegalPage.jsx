import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout/Layout";
import Seo from "../components/SEO/SEO";
import PrivacyNav from "../components/LegalPage/PrivacyNav";
import {
  Wrapper,
  Title,
  NavAndContentWrapper,
  Content,
} from "../components/LegalPage/LegalPage.styles";
import SliceZone from "../components/Slices/SliceZone";

const LegalPage = ({ data, path }) => {
  const {
    page_title,
    page_description,
    page_keywords,
    page_sharing_image,
    body,
    header,
  } = data.prismicLegalPage.data;
  return (
    <Layout
      navigationData={data.prismicNavigation.data}
      footerData={data.prismicFooter.data}
    >
      <Seo
        title={page_title.text}
        desc={page_description.text}
        path={path}
        keywords={page_keywords}
        banner={page_sharing_image.url}
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
    prismicNavigation {
      ...NavigationData
    }
    prismicFooter {
      ...FooterData
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
        page_sharing_image {
          url
        }
        header {
          text
        }
        body {
          ... on PrismicLegalPageDataBodyNestedList {
            slice_type
            slice_label
            items {
              list_item {
                text
              }
              nested_list {
                richText
              }
            }
          }
          ... on PrismicLegalPageDataBodyHeading {
            id
            primary {
              heading {
                text
              }
            }
            slice_type
          }
          ... on PrismicLegalPageDataBodyRichTextSection {
            id
            primary {
              content {
                richText
              }
            }
            slice_type
          }
          ... on PrismicLegalPageDataBodyTable2Col {
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
                richText
              }
              col2 {
                richText
              }
            }
            slice_type
          }
          ... on PrismicLegalPageDataBodyTable3Col {
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
            }
            items {
              col1 {
                richText
              }
              col2 {
                richText
              }
              col3 {
                richText
              }
            }
            slice_type
          }
          ... on PrismicLegalPageDataBodyTable5Col {
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
                richText
              }
              col2 {
                richText
              }
              col3 {
                richText
              }
              col4 {
                richText
              }
              col5 {
                richText
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
