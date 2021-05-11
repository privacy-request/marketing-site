// src/pages/preview.js

import * as React from "react";
import { withPreviewResolver } from "gatsby-source-prismic";
import linkResolver from "../utils/linkResolver";
import { Layout } from "../components/Layout";

const PreviewPage = ({ isPreview, isLoading }) => {
  if (isPreview === false) return "Not a preview!";

  return (
    <Layout>
      <p>Loading</p>
    </Layout>
  );
};

export default withPreviewResolver(PreviewPage, {
  repositoryName: "pr-marketing-site",
  linkResolver,
});
