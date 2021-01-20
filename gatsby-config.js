module.exports = {
  siteMetadata: {
    title: "marketing-site",
  },
  plugins: [
    "gatsby-plugin-styled-components",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "UA-154605502-2",
      },
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: 'gatsby-source-prismic',
      options: {
        repositoryName: 'pr-marketing-site',
        accessToken: 'MC5YXzBrLXhFQUFDRUFiTDVK.77-977-977-977-9QO-_vVvvv70277-9Ge-_vVnvv71HXe-_vRYjZO-_vSzvv73vv70vXu-_vVEuZ1xQ',
        schemas: {
          homepage: require("./src/schemas/homepage.json"),
          navigation_bar: require("./src/schemas/navigation_bar.json"),
          product_page: require("./src/schemas/product_page.json"),
        },

      },
    },
  ],
};
