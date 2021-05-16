import { graphql } from "gatsby";

export const query = graphql`
  fragment BookADemoData on PrismicMailingListForm {
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
