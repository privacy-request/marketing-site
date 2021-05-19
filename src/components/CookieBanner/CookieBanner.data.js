import { graphql } from "gatsby";

export const query = graphql`
  fragment CookieBannerData on PrismicCookieBanner {
    data {
      accept {
        text
      }
      do_not_accept {
        text
      }
      collapsed_text {
        text
      }
      expanded_text {
        text
      }
      learn_more_link {
        text
      }
    }
  }
`;
