// import * as React from "react";
// import {
//   PrismicPreviewProvider,
//   componentResolverFromMap,
// } from "gatsby-plugin-prismic-previews";
// import LegalPage from "./src/templates/LegalPage";
// import ProductPage from "./src/templates/ProductPage";
// import Homepage from "./src/pages/index";
// import BlogPost from "./src/templates/BlogPost";
// import BlogPage from "./src/pages/blog";
// import OptIn from "./src/templates/OptIn";
// import { linkResolver } from "./src/utils/linkResolver";

// export const wrapRootElement = ({ element }) => (
//   <PrismicPreviewProvider
//     repositoryConfigs={[
//       {
//         repositoryName: process.env.GATSBY_PRISMIC_REPO_NAME,
//         linkResolver,
//         componentResolver: componentResolverFromMap({
//           homepage: Homepage,
//           prismicHomepage: Homepage,
//           product_page: ProductPage,
//           legal_page: LegalPage,
//           blog_post: BlogPost,
//           blog_page: BlogPage,
//           opt_in_page: OptIn,
//         }),
//       },
//     ]}
//   >
//     {element}
//   </PrismicPreviewProvider>
// );
