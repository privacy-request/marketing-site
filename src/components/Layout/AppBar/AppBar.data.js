import { graphql } from "gatsby";

export const query = graphql`
  fragment NavigationData on PrismicNavigation {
    data {
      body {
        ... on PrismicNavigationBodyNavigationItem {
          id
          slice_type
          primary {
            route {
              text
            }
            text {
              text
            }
          }
        }
        ... on PrismicNavigationBodyNavigationDropdown {
          id
          slice_type
          primary {
            text {
              text
            }
          }
          items {
            text {
              text
            }
            route {
              text
            }
          }
        }
        ... on PrismicNavigationBodyCallToAction {
          id
          slice_type
          primary {
            inverted
            route {
              text
            }
            text {
              text
            }
          }
        }
      }
      logo_icon {
        url
        dimensions {
          height
          width
        }
      }
      logo_text {
        url
        dimensions {
          width
          height
        }
      }
    }
  }
`;
