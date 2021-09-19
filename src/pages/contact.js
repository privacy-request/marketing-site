import { graphql } from "gatsby";
import React from "react";
import Layout from "../components/Layout/Layout";
import Seo from "../components/SEO/SEO";
import { withPreview } from "gatsby-source-prismic";
import isMobileScreen from "../components/utils/isMobileScreen";
import { Wrapper } from "../components/About/About.styles";
import {
  CompanyPageTitle,
  CompanyPageSubTitle,
} from "../components/typography";
import {
  ContactHeroBackground,
  Ellipse,
  Content,
  Card,
  ContactHero,
} from "../components/ContactPage/ContactPage.styles";
import ContactForm from "../components/ContactPage/ContactForm/ContactForm";

const ContactPage = ({ data, path }) => {
  const {
    page_description,
    page_keywords,
    page_title,
    subheadline,
    headline,
    first_name_label,
    last_name_label,
    email_label,
    phone_label,
    job_title_company_label,
    message_label,
    submit_button,
  } = data.prismicContactPage.data;
  const isMobile = isMobileScreen();

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
        <ContactHero>
          <CompanyPageTitle>{headline.text}</CompanyPageTitle>
          <CompanyPageSubTitle>{subheadline.text}</CompanyPageSubTitle>
        </ContactHero>
        {!isMobile && <ContactHeroBackground />}
        <Content>
          <Ellipse />
          <Card>
            <ContactForm
              {...{
                first_name_label,
                last_name_label,
                email_label,
                phone_label,
                job_title_company_label,
                message_label,
                submit_button,
              }}
            />
          </Card>
        </Content>
      </Wrapper>
    </Layout>
  );
};

export const query = graphql`
  query ContactPageQuery {
    prismicNavigation {
      ...NavigationData
    }
    prismicFooter {
      ...FooterData
    }
    prismicCookieBanner {
      ...CookieBannerData
    }
    prismicContactPage {
      data {
        page_title {
          text
        }
        page_description {
          text
        }
        page_keywords {
          keyword {
            text
          }
        }
        headline {
          text
        }
        subheadline {
          text
        }
        first_name_label {
          text
        }
        email_label {
          text
        }
        phone_label {
          text
        }
        job_title_company_label {
          text
        }
        last_name_label {
          text
        }
        message_label {
          text
        }
        submit_button {
          text
        }
        sales_associate_headline {
          text
        }
        email_prefix {
          text
        }
        email {
          text
        }
        phone_prefix {
          text
        }
        phone {
          text
        }
      }
      prismicId
    }
  }
`;

export default withPreview(ContactPage);
