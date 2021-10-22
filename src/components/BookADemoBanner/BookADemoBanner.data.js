import { graphql } from "gatsby";

export const query = graphql`
  fragment BookADemoBannerData on PrismicBookADemoBanner {
    data {
      email_input_placeholder {
        text
      }
      headline {
        text
      }
      paragraph {
        text
      }
      submit_button_text {
        text
      }
    }
  }
`;
