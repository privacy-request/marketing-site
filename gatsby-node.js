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
        query createProductPagesQuery {
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
        query CreateLegalPagesQuery {
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

  // Blog Posts
  const blogPostQueryResults = await wrapper(
    graphql(
      `
        query CreateBlogPostPagesQuery {
          allPrismicBlogPost {
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

  const BlogPostTemplate = require.resolve("./src/templates/BlogPost.jsx");

  const blogPosts = blogPostQueryResults.data.allPrismicBlogPost.edges;

  blogPosts.forEach((blogPost) => {
    createPage({
      path: `/blog/${blogPost.node.uid}/`,
      component: BlogPostTemplate,
      context: {
        slug: blogPost.node.uid,
      },
    });
  });

  // Opt In
  const optInQueryResults = await wrapper(
    graphql(
      `
        query CreateOptInPagesQuery {
          allPrismicOptInPage {
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

  const OptInPageTemplate = require.resolve("./src/templates/OptIn.jsx");
  const OptInConfirmationTemplate = require.resolve(
    "./src/templates/OptInConfirmation.jsx"
  );
  const OptInPages = optInQueryResults.data.allPrismicOptInPage.edges;

  OptInPages.forEach((OptInPage) => {
    createPage({
      path: `/${OptInPage.node.uid}/`,
      component: OptInPageTemplate,
      context: {
        slug: OptInPage.node.uid,
      },
    });
  });

  OptInPages.forEach((OptInPage) => {
    createPage({
      path: `/${OptInPage.node.uid}/thank-you`,
      component: OptInConfirmationTemplate,
      context: {
        slug: OptInPage.node.uid,
      },
    });
  });
};
