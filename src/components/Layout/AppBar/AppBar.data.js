import { graphql } from "gatsby";

export const query = graphql`
  fragment NavigationData on PrismicNavigationBar {
    data {
      product_pages_nav {
        text
      }
      get_a_demo_button {
        text
      }
      logo_text {
        url
        alt
        dimensions {
          height
          width
        }
      }
      logo_icon {
        url
        alt
        dimensions {
          height
          width
        }
      }
      customers_page_nav {
        text
      }
      homepage_nav {
        text
      }
      contact_page_nav {
        text
      }
      product_pages_sub_items {
        route {
          text
        }
        text {
          text
        }
      }
    }
  }
`;
