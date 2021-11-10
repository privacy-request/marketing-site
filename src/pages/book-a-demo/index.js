import { graphql } from "gatsby";
import React from "react";
import Layout from "../../components/Layout/Layout";
import Seo from "../../components/SEO/SEO";
import HeroAnimation from "../../components/Homepage/Hero/HeroAnimation";
import Form from "../../components/Form/Form";
import { SCREEN_SIZES } from "../../components/utils/constants";
import isMobileScreen from "../../components/utils/isMobileScreen";
import {
  Card,
  Content,
  Left,
  Right,
} from "../../components/BookADemoPage/BookADemoPage.styles";

const BookADemoPage = ({ data, path, location: { state } }) => {
  const { page_description, page_keywords, page_title, form_title, form } =
    data.prismicBookADemoPage.data;
  const isMobile = isMobileScreen(SCREEN_SIZES.LAPTOP_MEDIUM);
  const { email, redirectFromBookADemoForm } =
    state && state.redirectFromBookADemoForm ? state : {};
  console.log(email);
  const pageRoute = "book-a-demo";
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
      />
      <Content>
        {!isMobile && (
          <Left>
            <HeroAnimation />
          </Left>
        )}
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
      </Content>
    </Layout>
  );
};

export const query = graphql`
  query BookADemoPageQuery {
    prismicNavigation {
      ...NavigationData
    }
    prismicFooter {
      ...FooterData
    }
    prismicBookADemoPage {
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
        form_title {
          text
        }
        form {
          id
          link_type
          document {
            ... on PrismicForm {
              id
              data {
                body {
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
                  ... on PrismicFormDataBodySubmitButton {
                    id
                    primary {
                      text {
                        text
                      }
                    }
                    slice_type
                  }
                  ... on PrismicFormDataBodyTextInput {
                    id
                    slice_type
                    primary {
                      name {
                        text
                      }
                      label {
                        text
                      }
                    }
                  }
                  ... on PrismicFormDataBodyTwoTextInputs {
                    id
                    slice_type
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
                  }
                  ... on PrismicFormDataBodyTextArea {
                    id
                    slice_type
                    primary {
                      name {
                        text
                      }
                      label {
                        text
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;

export default BookADemoPage;