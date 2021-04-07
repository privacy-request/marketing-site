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
    {
      resolve: `gatsby-plugin-gdpr-cookies`,
      options: {
        googleAnalytics: {
          trackingId: "UA-154605502-2", // leave empty if you want to disable the tracker
          cookieName: "gatsby-gdpr-google-analytics", // default
          anonymize: true, // default
          allowAdFeatures: false, // default
        },
        // googleTagManager: {
        //   trackingId: "YOUR_GOOGLE_TAG_MANAGER_TRACKING_ID", // leave empty if you want to disable the tracker
        //   cookieName: "gatsby-gdpr-google-tagmanager", // default
        //   dataLayerName: "dataLayer", // default
        // },
        // defines the environments where the tracking should be available  - default is ["production"]
        environments: ["production", "development"],
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
          cookie_banner: require("./src/schemas/cookie_banner.json"),
          legal_page: require("./src/schemas/legal_page.json"),
          trusted_customers: require("./src/schemas/trusted_customers.json"),
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
