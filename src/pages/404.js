import * as React from "react";
import { withUnpublishedPreview } from "gatsby-source-prismic";

import PrivacyCenter from "../templates/privacyCenter";
import ProductPage from "../templates/ProductPage";

import { Layout } from "../components/Layout";

const NotFoundPage = () => (
  <Layout>
    <h1>Page not found!</h1>
  </Layout>
);

// If an unpublished `page` document is previewed, PageTemplate will be rendered.
export default withUnpublishedPreview(NotFoundPage, {
  templateMap: {
    productPage: ProductPage,
    privacyCenter: PrivacyCenter,
  },
});
