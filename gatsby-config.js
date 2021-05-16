const website = require("./config/website");
const linkResolver = require("./src/utils/linkResolver");

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
    {
      resolve: "gatsby-source-prismic",
      options: {
        repositoryName: "pr-marketing-site",
        accessToken: website.prismicAccessToken,
        linkResolver: () => (doc) => linkResolver(doc),
        prismicToolbar: true,
        releaseID: "",
        schemas: {
          homepage: require("./custom_types/homepage.json"),
          navigation_bar: require("./custom_types/navigation_bar.json"),
          product_page: require("./custom_types/product_page.json"),
          testimonials: require("./custom_types/testimonials.json"),
          mailing_list_form: require("./custom_types/mailing_list_form.json"),
          footer: require("./custom_types/footer.json"),
          calendar_page: require("./custom_types/calendar_page.json"),
          cookie_banner: require("./custom_types/cookie_banner.json"),
          legal_page: require("./custom_types/legal_page.json"),
          trusted_customers: require("./custom_types/trusted_customers.json"),
          demo_cta: require("./custom_types/demo_cta.json"),
        },
        shouldDownloadImage: ({ node, key, value }) => {
          return true;
        },
      },
    },
    {
      resolve: `gatsby-plugin-gdpr-cookies`,
      options: {
        googleAnalytics: {
          trackingId: "UA-154605502-2",
          cookieName: "gatsby-gdpr-google-analytics",
          head: true,
          anonymize: true,
        },
        environments: ["production"],
      },
    },
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
