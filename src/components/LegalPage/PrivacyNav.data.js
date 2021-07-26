import { graphql } from "gatsby";

export const query = graphql`
  fragment PrivacyNavData on PrismicLegalPageNav {
    data {
      display_order {
        page {
          uid
        }
      }
    }
  }
`;
