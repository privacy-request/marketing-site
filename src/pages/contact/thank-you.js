import { graphql } from "gatsby";
import React from "react";
import Layout from "../../components/Layout/Layout";
import ConfirmationMessage from "../../components/ConfirmationMessage/ConfirmationMessage";

const ThankYou = ({ data }) => {
  const { confirmation_message, confirmation_heading } =
    data.prismicContactPage.data;
  return (
    <Layout
      navigationData={data.prismicNavigation.data}
      footerData={data.prismicFooter.data}
    >
      <ConfirmationMessage
        heading={confirmation_heading.text}
        message={confirmation_message.text}
      />
    </Layout>
  );
};

export const query = graphql`
  query test {
    prismicNavigation {
      ...NavigationData
    }
    prismicFooter {
      ...FooterData
    }
    prismicContactPage {
      data {
        confirmation_message {
          text
        }
        confirmation_heading {
          text
        }
      }
    }
  }
`;

export default ThankYou;
