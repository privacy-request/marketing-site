import { graphql } from "gatsby";
import React from "react";
import Layout from "../../components/Layout/Layout";
import ConfirmationMessage from "../../components/ConfirmationMessage/ConfirmationMessage";

const DemoBooking = ({ data }) => {
  const { confirmation_message, confirmation_heading } =
    data.prismicBookADemoPage.data;
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
  query DemoBookingThankYouQuery {
    prismicNavigation {
      ...NavigationData
    }
    prismicFooter {
      ...FooterData
    }
    prismicBookADemoPage {
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

export default DemoBooking;
