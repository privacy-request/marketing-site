import React from "react";
import { graphql } from "gatsby";
import { withUnpublishedPreview } from "gatsby-source-prismic";
import LegalPage from "../templates/LegalPage";
import ProductPage from "../templates/ProductPage";
import Homepage from "./index";

import Layout from "../components/Layout/Layout";

const NotFoundPage = ({ path, data }) => {
  return (
    <Layout
      path={path}
      navigationBarData={data.prismicNavigationBar.data}
      footerData={data.prismicFooter.data}
      cookieBannerData={data.prismicCookieBanner.data}
    >
      <h1>Page not found!</h1>
    </Layout>
  );
};

export const query = graphql`
  query NotFoundPageQuery {
    prismicNavigationBar {
      ...NavigationData
    }
    prismicFooter {
      ...FooterData
    }
    prismicCookieBanner {
      ...CookieBannerData
    }
  }
`;

// If an unpublished `page` document is previewed, PageTemplate will be rendered.
export default withUnpublishedPreview(NotFoundPage, {
  templateMap: {
    homepage: Homepage,
    prismicHomepage: Homepage,
    product_page: ProductPage,
    legal_page: LegalPage,
  },
});
