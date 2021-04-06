// Error catching
const wrapper = (promise) =>
  promise.then((result) => {
    if (result.errors) {
      throw result.errors;
    }
    return result;
  });

// Create templated pages
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  // Product pages
  const productPageTemplate = require.resolve(
    "./src/templates/ProductPage.jsx"
  );
  const productPageQueryResults = await wrapper(
    graphql(
      `
        query MyQuery {
          allPrismicProductPage {
            edges {
              node {
                uid
              }
            }
          }
        }
      `
    )
  );

  const productPages = productPageQueryResults.data.allPrismicProductPage.edges;

  productPages.forEach((productPage) => {
    createPage({
      path: `/${productPage.node.uid}/`,
      component: productPageTemplate,
      context: {
        slug: productPage.node.uid,
      },
    });
  });

  // Legal pages
  const legalPageQueryResults = await wrapper(
    graphql(
      `
        query CreateLegalPageQuery {
          allPrismicLegalPage {
            edges {
              node {
                uid
              }
            }
          }
        }
      `
    )
  );

  const legalPageTemplate = require.resolve("./src/templates/LegalPage.jsx");

  const legalPages = legalPageQueryResults.data.allPrismicLegalPage.edges;

  legalPages.forEach((legalPage) => {
    createPage({
      path: `/${legalPage.node.uid}/`,
      component: legalPageTemplate,
      context: {
        slug: legalPage.node.uid,
      },
    });
  });
};
