import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import styled, { css } from "styled-components";
import TextWithIllustration from "./TextWithIllustration";
import { SCREEN_SIZES } from "./utils/constants";
import Image from "./Image";
import isMobileScreen from "./utils/isMobileScreen";

const sectionStyles = [
  css`
    height: 82rem;
    h2 {
      color: ${({ theme }) => theme.colour.blue.dark};
    }
    background: #f7fcff;
  `,
  css`
    background: ${({ theme }) => theme.colour.yellow};
  `,
  css`
    background: ${({ theme }) => theme.colour.grey.dark};
    color: ${({ theme }) => theme.colour.white};
  `,
  css`
    height: 82rem;
    h2 {
      color: ${({ theme }) => theme.colour.blue.dark};
    }
    background: #f7fcff;
  `,
];

const Section = styled.section`
  height: 67.5rem;
  max-width: ${({ theme: { width } }) => width.site};
  margin: auto;
  position: relative;
  overflow: hidden;
  padding: 0 ${({ theme: { padding } }) => padding.site};
  ${({ index }) => sectionStyles[index]}
  @media only screen and (max-width: ${SCREEN_SIZES.LAPTOP}px) {
    height: fit-content;
  }
`;

const ProductsWrapper = styled.div`
  position: relative;
`;

const Background = styled(Image)`
  position: absolute;
  max-width: 150rem;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  height: 100%;
  left: 0;
  right: 0;
  top: 230px;
  z-index: 1;
  mix-blend-mode: multiply;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  max-width: ${({ theme: { width } }) => width.section};
  margin-left: auto;
  z-index: 10;
  /* margin: 0rem 0; */

  @media only screen and (max-width: ${SCREEN_SIZES.LAPTOP}px) {
    flex-direction: column-reverse;
  }
`;

const HomepageProducts = () => {
  const data = useStaticQuery(query);
  const {
    body: sections,
    productSectionBackground,
  } = data.allPrismicHomepage.nodes[0].data;
  const isMobile = isMobileScreen();
  return (
    <ProductsWrapper>
      {!isMobile && <Background image={productSectionBackground} />}
      {sections.map((section, index) => (
        <Section index={index} key={index}>
          <Wrapper>
            <TextWithIllustration
              key={section.id}
              {...section.primary}
              isMobile={isMobile}
            />
          </Wrapper>
        </Section>
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
                }
                desktopIllustration: illustration {
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
          productSectionBackground: product_over_section_background {
            url
            alt
            dimensions {
              height
              width
            }
          }
        }
      }
    }
  }
`;

export default HomepageProducts;
