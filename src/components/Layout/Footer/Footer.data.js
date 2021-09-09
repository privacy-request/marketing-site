import { graphql } from "gatsby";

export const query = graphql`
  fragment FooterData on PrismicFooter {
    data {
      privacy_center {
        text
      }
      privacy_center_icon {
        url
        alt
        dimensions {
          height
          width
        }
      }
      copyright {
        text
      }
      social_media_links {
        icon {
          url
          dimensions {
            height
            width
          }
          alt
        }
        url {
          url
        }
      }
      privacy_center_links {
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
