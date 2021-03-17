import { graphql } from "gatsby";
import React from "react";
import Layout from "../components/Layout";
import SEO from "../components/SEO/SEO";
import styled from "styled-components";
import {
  ProductPageHeadline,
  ProductPageSubheadline,
} from "../components/typography";
import { SCREEN_SIZES } from "../components/utils/constants";
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
    text-align: left;
    padding: 0 3rem;
    align-items: end;
    margin-top: 1rem;
    margin-bottom: 5rem;
  }
`;

const CalendarPage = ({ data, path }) => {
  const {
    calendarURL,
    headline,
    description,
    keywords,
    title,
    subheadline,
  } = data.allPrismicCalendarPage.edges[0].node.data;
  return (
    <Layout>
      <SEO
        title={title.text}
        desc={description.text}
        path={path}
        keywords={keywords}
      />
      <Hero>
        <ProductPageHeadline>{headline.text}</ProductPageHeadline>
        <ProductPageSubheadline>{subheadline.text}</ProductPageSubheadline>
      </Hero>
      <InlineWidget styles={{ height: "1000px" }} url={calendarURL.url} />
    </Layout>
  );
};

export const query = graphql`
  query CalendarPageQuery {
    allPrismicCalendarPage {
      edges {
        node {
          data {
            calendarURL: calendar_url {
              url
            }
            headline {
              text
            }
            description: page_description {
              text
            }
            keywords: page_keywords {
              keyword {
                text
              }
            }
            title: page_title {
              text
            }
            subheadline {
              text
            }
          }
        }
      }
    }
  }
`;

export default CalendarPage;
