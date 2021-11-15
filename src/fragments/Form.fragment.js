import { graphql } from "gatsby";

export const query = graphql`
  fragment FormData on PrismicForm {
    ... on PrismicForm {
      id
      data {
        body {
          ... on PrismicFormDataBodyCheckbox {
            id
            primary {
              label {
                text
              }
              name {
                text
              }
              required
            }
            slice_type
          }
          ... on PrismicFormDataBodyRichTextSection {
            id
            primary {
              content {
                richText
              }
            }
            slice_type
          }
          ... on PrismicFormDataBodySubmitButton {
            id
            primary {
              text {
                text
              }
            }
            slice_type
          }
          ... on PrismicFormDataBodyTextInput {
            id
            slice_type
            primary {
              name {
                text
              }
              label {
                text
              }
              required
            }
          }
          ... on PrismicFormDataBodyTwoTextInputs {
            id
            slice_type
            primary {
              label_1 {
                text
              }
              label_2 {
                text
              }
              required_1
              name_1 {
                text
              }
              name_2 {
                text
              }
              required_2
            }
          }
          ... on PrismicFormDataBodyTextArea {
            id
            slice_type
            primary {
              name {
                text
              }
              label {
                text
              }
              required
            }
          }
        }
      }
    }
  }
`;
