const website = require("./config/website");

const pathPrefix = website.pathPrefix === "/" ? "" : website.pathPrefix;

module.exports = {
  /* General Information */
  pathPrefix: website.pathPrefix,
  siteMetadata: {
    siteUrl: website.url + pathPrefix, // For gatsby-plugin-sitemap
    pathPrefix,
    title: website.title,
    titleAlt: website.titleAlt,
    description: website.description,
    banner: website.banner,
    siteLanguage: website.siteLanguage,
    ogLanguage: website.ogLanguage,
    twitter: website.twitter,
    facebook: website.facebook,
  },

  /* Plugins */
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
      resolve: "gatsby-source-prismic",
      options: {
        repositoryName: "pr-marketing-site",
        accessToken: website.prismicAccessToken,
        schemas: {
          homepage: require("./src/schemas/homepage.json"),
          navigation_bar: require("./src/schemas/navigation_bar.json"),
          product_page: require("./src/schemas/product_page.json"),
          testimonials: require("./src/schemas/testimonials.json"),
          mailing_list_form: require("./src/schemas/mailing_list_form.json"),
          footer: require("./src/schemas/footer.json"),
          calendar_page: require("./src/schemas/calendar_page.json"),
        },
        shouldDownloadImage: ({ node, key, value }) => {
          return true;
        },
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: website.title,
        short_name: website.titleAlt,
        description: website.description,
        start_url: website.pathPrefix,
        background_color: website.backgroundColor,
        theme_color: website.themeColor,
        display: "standalone",
        icon: website.favicon,
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/,
        },
      },
    },
  ],
};
