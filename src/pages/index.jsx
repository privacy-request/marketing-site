import * as React from "react";
import Layout from "../components/Layout";
import SEO from "../components/SEO/SEO";
import HomepageHero from "../components/HomepageHero";

const HomePage = ({ path, data }) => {
  const {
    callToAction,
    callToActionIcon,
    customerLogos,
    customerHeadline,
    headline,
    heroArt,
    description,
    keywords,
    title,
    productSectionBackground,
    subheadline,
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
      <HomepageHero
        callToActionText={callToAction.text}
        callToActionIcon={callToActionIcon}
        headline={headline.text}
        heroArt={heroArt}
        subheadline={subheadline.text}
      />
    </Layout>
  );
};

export const query = graphql`
  query MyQuery {
    homepage: allPrismicHomepage {
      edges {
        node {
          data {
            callToAction: call_to_action {
              text
            }
            callToActionIcon: call_to_action_icon {
              url
            }
            customerLogos: customer_logos {
              logo {
                url
                alt
              }
            }
            customerHeadline: customers_headline {
              text
            }
            headline {
              text
            }
            heroArt: hero_art {
              url
              alt
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
            subheadline {
              text
            }
          }
        }
      }
    }
  }
`;

export default HomePage;
