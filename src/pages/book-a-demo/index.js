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
  const {
    page_description,
    page_keywords,
    page_title,
    page_sharing_image,
    form_title,
    form,
  } = data.prismicBookADemoPage.data;
  const isMobile = isMobileScreen(SCREEN_SIZES.LAPTOP_MEDIUM);
  const { email } = state && state.redirectFromBookADemoForm ? state : {};
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
        banner={page_sharing_image.url}
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
              preFill={{ email: email }}
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
        page_sharing_image {
          url
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
            ...FormData
          }
        }
      }
    }
  }
`;

export default BookADemoPage;
