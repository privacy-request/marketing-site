import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout/Layout";
import Seo from "../components/SEO/SEO";
import { RichText } from "prismic-reactjs";
import { withPreview } from "gatsby-source-prismic";
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
    left_side_rich_text,
    form_title,
    form_submit,
    body,
  } = data.prismicOptInPage.data;
  const isMobile = isMobileScreen();
  const pageRoute = data.prismicOptInPage.uid;
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
          <Left>
            <>
              <OptInRichTextWrapper>
                <RichText render={left_side_rich_text.raw} />
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
                submit={form_submit.text}
                inputs={data.prismicForm.data.body}
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
  query OptInQuery($slug: String, $formID: String) {
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
    prismicForm(uid: { eq: $formID }) {
      data {
        body {
          ... on PrismicFormBodyTwoTextInputs {
            id
            primary {
              label_1 {
                text
              }
              label_2 {
                text
              }
              name_1 {
                text
              }
              name_2 {
                text
              }
            }
            slice_type
          }
          ... on PrismicFormBodyTextInput {
            id
            primary {
              label {
                text
              }
              name {
                text
              }
            }
            slice_type
          }
          ... on PrismicFormBodyCheckbox {
            id
            primary {
              label {
                text
              }
              name {
                text
              }
            }
            slice_type
          }
        }
      }
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
        left_side_rich_text {
          raw
        }
        form_title {
          text
        }
        form_submit {
          text
        }
        body {
          ... on PrismicOptInPageBodyRichTextSection {
            id
            primary {
              content {
                raw
              }
            }
            slice_type
          }
          ... on PrismicOptInPageBodyTable5Col {
            id
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
          ... on PrismicOptInPageBodyTable2Col {
            id
            items {
              col1 {
                raw
              }
              col2 {
                raw
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

export default withPreview(OptIn);
