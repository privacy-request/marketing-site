import React from "react";
import { graphql } from "gatsby";
import {
  withPrismicUnpublishedPreview,
  componentResolverFromMap,
} from "gatsby-plugin-prismic-previews";
import LegalPage from "../templates/LegalPage";
import ProductPage from "../templates/ProductPage";
import Homepage from "./index";
import BlogPost from "../templates/BlogPost";
import BlogPage from "./blog";
import OptIn from "../templates/OptIn";
import { linkResolver } from "../utils/linkResolver";

import Layout from "../components/Layout/Layout";

const NotFoundPage = ({ path, data }) => {
  return (
    <Layout
      path={path}
      navigationData={data.prismicNavigation.data}
      footerData={data.prismicFooter.data}
    >
      <h1>Page not found!</h1>
    </Layout>
  );
};

export const query = graphql`
  query NotFoundPageQuery {
    prismicNavigation {
      ...NavigationData
    }
    prismicFooter {
      ...FooterData
    }
  }
`;

// If an unpublished `page` document is previewed, PageTemplate will be rendered.
export default withPrismicUnpublishedPreview(NotFoundPage, [
  {
    repositoryName: process.env.GATSBY_PRISMIC_REPO_NAME,
    linkResolver,
    componentResolver: componentResolverFromMap({
      homepage: Homepage,
      prismicHomepage: Homepage,
      product_page: ProductPage,
      legal_page: LegalPage,
      blog_post: BlogPost,
      blog_page: BlogPage,
      opt_in_page: OptIn,
    }),
  },
]);
