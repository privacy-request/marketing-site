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
        releaseID: "",
        schemas: {
          homepage: require("./custom_types/homepage.json"),
          blog_post: require("./custom_types/blog_post.json"),
          blog_page: require("./custom_types/blog_page.json"),
          navigation: require("./custom_types/navigation.json"),
          product_page: require("./custom_types/product_page.json"),
          testimonials: require("./custom_types/testimonials.json"),
          mailing_list_form: require("./custom_types/mailing_list_form.json"),
          footer: require("./custom_types/footer.json"),
          calendar_page: require("./custom_types/calendar_page.json"),
          about_page: require("./custom_types/about_page.json"),
          contact_page: require("./custom_types/contact_page.json"),
          cookie_banner: require("./custom_types/cookie_banner.json"),
          legal_page: require("./custom_types/legal_page.json"),
          trusted_customers: require("./custom_types/trusted_customers.json"),
          demo_cta: require("./custom_types/demo_cta.json"),
          legal_page_nav: require("./custom_types/legal_page_nav.json"),
          book_a_demo_banner: require("./custom_types/book_a_demo_banner.json"),
          opt_in_page: require("./custom_types/opt_in_page.json"),
          form: require("./custom_types/form.json"),
        },
      },
    },
    {
      resolve: `gatsby-plugin-gdpr-cookies`,
      options: {
        googleAnalytics: {
          trackingId: "UA-154605502-2",
          cookieName: "gatsby-gdpr-google-analytics",
          anonymize: true,
        },
      },
    },
    "gatsby-plugin-styled-components",
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
