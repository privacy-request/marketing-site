import * as React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";
import Layout from "../components/Layout";
import SEO from "../components/SEO/SEO";
import Hero from "../components/Homepage/Hero";
import TrustedCustomers from "../components/TrustedCustomers";
import HomepageProducts from "../components/Homepage/Products";
import Testimonials from "../components/Testimonials/Testimonials";
import BookADemo from "../components/BookADemo";

const MarginWrapper = styled.div`
  margin: auto;
  max-width: ${({ theme: { width } }) => width.site};
  padding: 0 ${({ theme: { padding } }) => padding.site};
`;

const HomePage = ({ path, data }) => {
  const { description, keywords, title } = data.homepage.edges[0].node.data;
  return (
    <Layout path={path}>
      <SEO
        title={title.text}
        desc={description.text}
        path={path}
        keywords={keywords}
      />
      <MarginWrapper>
        <Hero />
        <TrustedCustomers />
      </MarginWrapper>
      <HomepageProducts />
      <Testimonials />
      <BookADemo />
    </Layout>
  );
};

export const query = graphql`
  query HomepageQuery {
    homepage: allPrismicHomepage {
      edges {
        node {
          data {
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
          }
        }
      }
    }
  }
`;

export default HomePage;
