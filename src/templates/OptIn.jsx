import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout/Layout";
import Seo from "../components/SEO/SEO";
import { RichText } from "prismic-reactjs";
import {
  Wrapper,
  Ellipse,
  LeftBlob,
  RightBlob,
  HeroBlocks,
  Left,
  Right,
  Content,
  Card,
  AdditionalContent,
} from "../components/OptIn/OptIn.styles";
import { OptInRichTextWrapper } from "../components/typography";
import isMobileScreen from "../components/utils/isMobileScreen";
import SliceZone from "../components/Slices/SliceZone";
import Form from "../components/Form/Form";

const OptIn = ({ data, path }) => {
  const {
    page_description,
    page_keywords,
    page_title,
    hide_navbar,
    left_side_rich_text,
    form_title,
    body,
    social_sharing_image,
    form,
  } = data.prismicOptInPage.data;
  const isMobile = isMobileScreen();
  const pageRoute = data.prismicOptInPage.uid;
  return (
    <Layout
      navigationData={data.prismicNavigation.data}
      footerData={data.prismicFooter.data}
      hideNavBar={hide_navbar}
    >
      <Seo
        title={page_title.text}
        desc={page_description.text}
        path={path}
        keywords={page_keywords}
        banner={social_sharing_image.url}
      />
      <Wrapper>
        <Content>
          <Left>
            <>
              <OptInRichTextWrapper>
                <RichText render={left_side_rich_text.richText} />
              </OptInRichTextWrapper>
              {!isMobile && <HeroBlocks />}
            </>
          </Left>
          <Right>
            <Card>
              <Form
                pageRoute={pageRoute}
                actionRoute={`/${pageRoute}/thank-you`}
                title={form_title.text}
                inputs={form.document.data.body}
              />
            </Card>
          </Right>
          {!isMobile && (
            <>
              <LeftBlob />
              <RightBlob />
            </>
          )}
          <Ellipse />
        </Content>
        <AdditionalContent>
          <SliceZone slices={body} />
        </AdditionalContent>
      </Wrapper>
    </Layout>
  );
};

export const query = graphql`
  query OptInQuery($slug: String) {
    prismicNavigation {
      ...NavigationData
    }
    prismicFooter {
      ...FooterData
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
        social_sharing_image {
          url
        }
        hide_navbar
        left_side_rich_text {
          richText
        }
        form_title {
          text
        }
        form {
          id
          link_type
          document {
            ...FormData
          }
        }
        body {
          ... on PrismicOptInPageDataBodyRichTextSection {
            id
            primary {
              content {
                richText
              }
            }
            slice_type
          }
          ... on PrismicOptInPageDataBodyTable5Col {
            id
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
            slice_type
          }
          ... on PrismicOptInPageDataBodyTable2Col {
            id
            items {
              col1 {
                richText
              }
              col2 {
                richText
              }
            }
            primary {
              col1 {
                text
              }
              col2 {
                text
              }
            }
            slice_type
          }
        }
      }
    }
  }
`;

export default OptIn;
