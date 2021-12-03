import { graphql } from "gatsby";
import React from "react";
import Layout from "../../components/Layout/Layout";
import Seo from "../../components/SEO/SEO";
import isMobileScreen from "../../components/utils/isMobileScreen";
import {
  CompanyPageTitle,
  CompanyPageSubTitle,
  SalesCardTitle,
  SalesCardParagraph,
} from "../../components/typography";
import {
  Wrapper,
  ContactHeroBackground,
  Ellipse,
  Content,
  ContactFormCard,
  SalesCard,
  ContactHero,
  Email,
  Phone,
  Blob,
} from "../../components/ContactPage/ContactPage.styles";
import Form from "../../components/Form/Form";

const ContactPage = ({ data, path }) => {
  const {
    page_description,
    page_keywords,
    page_title,
    subheadline,
    headline,
    sales_associate_headline,
    email_prefix,
    email,
    phone_prefix,
    phone,
    form,
  } = data.prismicContactPage.data;
  const isMobile = isMobileScreen();
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
      <Wrapper>
        <ContactHero>
          <CompanyPageTitle>{headline.text}</CompanyPageTitle>
          <CompanyPageSubTitle>{subheadline.text}</CompanyPageSubTitle>
          {!isMobile && <ContactHeroBackground />}
        </ContactHero>
        <Content>
          <Ellipse />
          <ContactFormCard>
            <Form
              pageRoute={"contact"}
              actionRoute={`/contact/thank-you`}
              inputs={form.document.data.body}
            />
          </ContactFormCard>
          {!isMobile && <Blob />}
          <SalesCard>
            <SalesCardTitle>{sales_associate_headline.text}</SalesCardTitle>
            <SalesCardParagraph>
              {email_prefix.text}
              <Email href={`mailto:${email.text}`} target="_blank">
                {email.text}
              </Email>
              {phone_prefix.text}
              <Phone href={`tel:+${phone.text}`}>{phone.text}</Phone>.
            </SalesCardParagraph>
          </SalesCard>
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
        form {
          id
          link_type
          document {
            ...FormData
          }
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

export default ContactPage;
