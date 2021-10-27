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
      hidNavBar={hide_navbar}
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
    prismicFooter {
      ...FooterData
    }
    prismicCookieBanner {
      ...CookieBannerData
    }
    prismicForm(uid: { eq: $formID }) {
      data {
        body {
          ... on PrismicFormDataBodyTwoTextInputs {
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
          ... on PrismicFormDataBodyTextInput {
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
          ... on PrismicFormDataBodyCheckbox {
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
          ... on PrismicFormDataBodyRichTextSection {
            id
            primary {
              content {
                richText
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
        hide_navbar
        left_side_rich_text {
          richText
        }
        form_title {
          text
        }
        form_submit {
          text
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
