import { graphql } from "gatsby";

export const query = graphql`
  fragment TrustedCustomersData on PrismicTrustedCustomers {
    data {
      display_section_flag
      headline {
        text
      }
      logos {
        logo {
          dimensions {
            height
            width
          }
          url
        }
      }
    }
  }
`;
