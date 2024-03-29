import { graphql } from "gatsby";
import React from "react";
import Layout from "../components/Layout/Layout";
import ConfirmationMessage from "../components/ConfirmationMessage/ConfirmationMessage";

const ThankYou = ({ data }) => {
  const { confirmation_headline, confirmation_subheadline } =
    data.prismicOptInPage.data;
  return (
    <Layout
      navigationData={data.prismicNavigation.data}
      footerData={data.prismicFooter.data}
    >
      <ConfirmationMessage
        heading={confirmation_headline.text}
        message={confirmation_subheadline.text}
      />
    </Layout>
  );
};

export const query = graphql`
  query OptInConfirmationQuery($slug: String) {
    prismicNavigation {
      ...NavigationData
    }
    prismicFooter {
      ...FooterData
    }
    prismicOptInPage(uid: { eq: $slug }) {
      uid
      data {
        confirmation_headline {
          text
        }
        confirmation_subheadline {
          text
        }
      }
    }
  }
`;

export default ThankYou;
