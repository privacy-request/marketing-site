import { graphql } from "gatsby";
import styled from "styled-components";
import React, { useState } from "react";
import Layout from "../components/Layout/Layout";
import Seo from "../components/SEO/SEO";
import { withPreview } from "gatsby-source-prismic";
import isMobileScreen from "../components/utils/isMobileScreen";
import ContactContentEllipse from "../../assets/contactPageEllipse.svg";
import { CompanyPageParagraph } from "../components/typography";
import { Wrapper, Blob } from "../components/About/About.styles";
import PageHero from "../components/PageHero";
import InputWithLabel from "../components/InputWithLabel";

const Ellipse = styled(ContactContentEllipse)`
  margin-bottom: -50rem;
`;

const Content = styled.div`
  margin-top: -44rem;
  z-index: -2;
  display: flex;
  align-items: center;
  flex-direction: column;
  min-height: 500px;
  position: relative;
  padding: 0 3rem;

  transform-origin: center;
  min-height: 70rem;
  background: linear-gradient(
    92.13deg,
    #009dff 3.73%,
    #6bcbff 60.51%,
    #8fd8ff 86.59%
  );
  @media only screen and (max-width: 600px) {
    background-size: cover;
  }
`;

const Card = styled.div`
  width: 850px;
  height: 100px;
  position: relative;

  border-radius: 16px;
  box-shadow: 0px 28px 92px rgba(32, 53, 70, 0.3);
  margin: auto;
  background: #ffffff;
  padding: 5.4rem 8.3rem 3.4rem 8.3rem;
  box-sizing: border-box;

  z-index: 10;
`;

const ContactPage = ({ data, path }) => {
  const { page_description, page_keywords, page_title, subheadline, headline } =
    data.prismicContactPage.data;
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
        <PageHero headline={headline.text} subheadline={subheadline.text} />
        <Content>
          <Ellipse />
          <Card>
            <InputWithLabel />
          </Card>
        </Content>
      </Wrapper>
    </Layout>
  );
};

export const query = graphql`
  query ContactPageQuery {
    prismicNavigationBar {
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
        headline {
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
        page_title {
          text
        }
        subheadline {
          text
        }
      }
    }
  }
`;

export default ContactPage;
