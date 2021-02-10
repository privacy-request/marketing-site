import * as React from "react";
import styled from "styled-components";
import Layout from "../components/Layout";
import SEO from "../components/SEO/SEO";
import Hero from "../components/Homepage/Hero";
import TrustedCustomers from "../components/TrustedCustomers";
import HomepageProducts from "../components/Homepage/Products";

const MarginWrapper = styled.div`
  margin: auto;
  max-width: ${({ theme: { width } }) => width.site};
  padding: 0 ${({ theme: { padding } }) => padding.site};
`;

const HomePage = ({ path, data }) => {
  const {
    customerLogos,
    customerHeadline,
    description,
    keywords,
    title,
  } = data.homepage.edges[0].node.data;
  const keywordsString = keywords.map((word) => word.keyword.text).join(",");
  return (
    <Layout path={path}>
      <SEO
        title={title.text}
        desc={description.text}
        path={path}
        keywords={keywordsString}
      />
      <MarginWrapper>
        <Hero />
        <TrustedCustomers
          headline={customerHeadline.text}
          logos={customerLogos}
        />
      </MarginWrapper>
      <HomepageProducts />
    </Layout>
  );
};

export const query = graphql`
  query HomepageQuery {
    homepage: allPrismicHomepage {
      edges {
        node {
          data {
            customerLogos: customer_logos {
              logo {
                url
                alt
              }
            }
            customerHeadline: customers_headline {
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
            productSectionBackground: product_over_section_background {
              url
            }
          }
        }
      }
    }
  }
`;

export default HomePage;
