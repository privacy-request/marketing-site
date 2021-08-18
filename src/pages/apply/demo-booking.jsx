import { graphql } from "gatsby";
import React from "react";
import Layout from "../../components/Layout/Layout";
import { withPreview } from "gatsby-source-prismic";
import ConfirmationMessage from "../../components/ConfirmationMessage/ConfirmationMessage";

const DemoBooking = ({ data }) => {
  const { confirmation_message, confirmation_heading } =
    data.prismicCalendarPage.data;
  return (
    <Layout
      navigationData={data.prismicNavigation.data}
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
  query DemoBookingQuery {
    prismicNavigation {
      ...NavigationData
    }
    prismicFooter {
      ...FooterData
    }
    prismicCookieBanner {
      ...CookieBannerData
    }
    prismicCalendarPage {
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

export default withPreview(DemoBooking);
