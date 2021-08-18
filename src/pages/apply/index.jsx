import { graphql } from "gatsby";
import React from "react";
import Layout from "../../components/Layout/Layout";
import Seo from "../../components/SEO/SEO";
import styled from "styled-components";
import { withPreview } from "gatsby-source-prismic";
import {
  ProductPageHeadline,
  ProductPageSubheadline,
} from "../../components/typography";
import { SCREEN_SIZES } from "../../components/utils/constants";
import { InlineWidget } from "react-calendly";

const Hero = styled.header`
  max-width: ${({ theme }) => theme.width.productPageHero};
  margin: 4.5rem auto 0rem auto;
  text-align: center;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  align-items: center;
  position: relative;
  @media only screen and (max-width: ${SCREEN_SIZES.LAPTOP}px) {
    margin-top: 4rem;
  }
`;

const CalendarPage = ({ data, path, location: { state } }) => {
  const {
    calendar_url,
    headline,
    page_description,
    page_keywords,
    page_title,
    subheadline,
  } = data.prismicCalendarPage.data;
  const { email, redirectFromBookADemoForm } =
    state && state.redirectFromBookADemoForm ? state : {};
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
      <Hero>
        <ProductPageHeadline>{headline.text}</ProductPageHeadline>
        <ProductPageSubheadline>{subheadline.text}</ProductPageSubheadline>
      </Hero>
      <InlineWidget
        styles={{ height: "1000px" }}
        prefill={{
          email,
          customAnswers: {
            a3: redirectFromBookADemoForm ? 1 : 0,
          },
        }}
        url={calendar_url.url}
      />
    </Layout>
  );
};

export const query = graphql`
  query CalendarPageQuery {
    prismicNavigation {
      ...NavigationData
    }
    prismicFooter {
      ...FooterData
    }
    prismicCookieBanner {
      ...CookieBannerData
    }
    prismicCalendarPage {
      data {
        calendar_url {
          url
        }
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

export default withPreview(CalendarPage);
