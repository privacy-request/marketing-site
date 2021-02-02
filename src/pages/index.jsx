import * as React from "react";
import styled from "styled-components";
import Layout from "../components/Layout";
import SEO from "../components/SEO/SEO";
import HomepageHero from "../components/HomepageHero";
import TrustedCustomers from "../components/TrustedCustomers";

const HomepageContainer = styled.div`
  margin-left: auto;
  max-width: 114rem;
`;

const ProductSectionBackground = styled.img`
  position: absolute;
  max-width: 144rem;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
`;

const ProductSectionContainer = styled.div``;

const HomePage = ({ path, data }) => {
  const {
    customerLogos,
    customerHeadline,
    description,
    keywords,
    title,
    productSectionBackground,
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
      <HomepageContainer>
        <HomepageHero />
        <TrustedCustomers
          headline={customerHeadline.text}
          logos={customerLogos}
        />
        <ProductSectionContainer>
          <ProductSectionBackground src={productSectionBackground.url} />
        </ProductSectionContainer>
      </HomepageContainer>
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
