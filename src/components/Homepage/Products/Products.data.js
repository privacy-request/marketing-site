import { graphql } from "gatsby";

export const query = graphql`
  fragment ProductsData on PrismicHomepage {
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
            illustration_mobile {
              url
              alt
              dimensions {
                height
                width
              }
            }
            vertical_margin
            horizontal_margin
            route: learn_more_route
            mobile_horizontal_offset
            mobile_vertical_offset
            mobile_vertical_margin
            mobile_horizontal_margin
            mobile_visual_height
            mobile_visual_width
            paragraph {
              text
            }
            subheading {
              text
            }
            vertical_offset
            visual_height
            visual_width
          }
        }
      }
    }
  }
`;
