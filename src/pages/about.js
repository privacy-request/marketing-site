import { graphql } from "gatsby";
import React from "react";
import Layout from "../components/Layout/Layout";
import Seo from "../components/SEO/SEO";
import styled from "styled-components";
import { withPreview } from "gatsby-source-prismic";
import {
  CompanyPageTitle,
  CompanyPageSubTitle,
} from "../components/typography";
import AboutContentBackground from "../../assets/aboutContentBackground.svg";
import AboutHeroBackground from "../../assets/aboutHeroBackground.svg";

const Wrapper = styled.div`
  position: relative;
  max-width: 144rem;
  margin: auto;
`;

const HeroBackground = styled(AboutHeroBackground)`
  position: absolute;
  z-index: -1;
  left: 4rem;
  top: 1.5rem;
`;

const ContentBackground = styled(AboutContentBackground)``;

const Hero = styled.header`
  display: flex;
  justify-content: center;
  margin: auto;
  flex-direction: column;
  min-height: 30rem;
  width: 73rem;
`;

const Content = styled.div`
  position: absolute;
  width: 802px;
  height: 593px;
  left: 319px;
  top: 384px;
  border-radius: 16px;
  /* White */

  background: #ffffff;
`;

const AboutPage = ({ data, path }) => {
  console.log(data);
  const {
    page_description,
    page_keywords,
    page_title,
    subheadline,
    content,
    headline,
  } = data.prismicAboutPage.data;

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
        <Hero>
          <CompanyPageTitle>{headline.text}</CompanyPageTitle>
          <CompanyPageSubTitle>{subheadline.text}</CompanyPageSubTitle>
          <HeroBackground />
        </Hero>
        <Content>{content.text}</Content>
        <ContentBackground />
      </Wrapper>
    </Layout>
  );
};

export const query = graphql`
  query AboutPageQuery {
    prismicNavigationBar {
      ...NavigationData
    }
    prismicFooter {
      ...FooterData
    }
    prismicCookieBanner {
      ...CookieBannerData
    }
    prismicAboutPage {
      data {
        headline {
          text
        }
        content {
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

export default withPreview(AboutPage);
