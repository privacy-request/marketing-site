// graphql function doesn't throw an error so we have to check to check for the result.errors to throw manually
const wrapper = (promise) =>
  promise.then((result) => {
    if (result.errors) {
      throw result.errors;
    }
    return result;
  });

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const productPageTemplate = require.resolve(
    "./src/templates/ProductPage.jsx"
  );
  const result = await wrapper(
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

  const productPages = result.data.allPrismicProductPage.edges;

  productPages.forEach((productPage) => {
    createPage({
      path: `/${productPage.node.uid}/`,
      component: productPageTemplate,
      context: {
        slug: productPage.node.uid,
      },
    });
  });
};
