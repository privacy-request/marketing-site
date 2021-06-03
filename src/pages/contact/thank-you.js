import { graphql } from "gatsby";
import React from "react";
import Layout from "../../components/Layout/Layout";
import { withPreview } from "gatsby-source-prismic";
import ConfirmationMessage from "../../components/ConfirmationMessage/ConfirmationMessage";

const ThankYou = ({ data }) => {
  const { confirmation_message, confirmation_heading } =
    data.prismicContactPage.data;
  return (
    <Layout
      navigationBarData={data.prismicNavigationBar.data}
      footerData={data.prismicFooter.data}
      cookieBannerData={data.prismicCookieBanner.data}
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
    prismicNavigationBar {
      ...NavigationData
    }
    prismicFooter {
      ...FooterData
    }
    prismicCookieBanner {
      ...CookieBannerData
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

export default withPreview(ThankYou);