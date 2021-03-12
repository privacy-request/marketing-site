import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";
import isMobileScreen from "../utils/isMobileScreen";
import Background from "./Background";
import ProductSection from "./ProductSection";

const ProductsWrapper = styled.div`
  position: relative;
  z-index: 0;
`;

const HomepageProducts = () => {
  const data = useStaticQuery(query);
  const { body: sections } = data.allPrismicHomepage.nodes[0].data;
  const isMobile = isMobileScreen();
  return (
    <ProductsWrapper>
      {!isMobile && <Background />}
      {sections.map((section, index) => (
        <ProductSection
          index={index}
          key={index}
          section={section}
          isMobile={isMobile}
        />
      ))}
    </ProductsWrapper>
  );
};

const query = graphql`
  query MyQuery {
    allPrismicHomepage {
      nodes {
        data {
          body {
            ... on PrismicHomepageBodyTextWithIllustration {
              id
              primary {
                heading {
                  text
                }
                icon {
                  alt
                  url
                  dimensions {
                    height
                    width
                  }
                }
                illustration {
                  url
                  alt
                  dimensions {
                    height
                    width
                  }
                }
                mobileIllustration: illustration_mobile {
                  url
                  alt
                  dimensions {
                    height
                    width
                  }
                }
                verticalMargin: vertical_margin
                horizontalMargin: horizontal_margin
                route: learn_more_route
                mobileHorizontalOffset: mobile_horizontal_offset
                mobileVerticalOffset: mobile_vertical_offset
                mobileVerticalMargin: mobile_vertical_margin
                mobileHorizontalMargin: mobile_horizontal_margin
                mobileVisualHeight: mobile_visual_height
                mobileVisualWidth: mobile_visual_width
                paragraph {
                  text
                }
                subheading {
                  text
                }
                verticalOffset: vertical_offset
                visualHeight: visual_height
                visualWidth: visual_width
              }
            }
          }
        }
      }
    }
  }
`;

export default HomepageProducts;
