module.exports = {
  pathPrefix: "/", // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "portfolio"
  title: "Opsware Data", // Navigation and Site Title
  titleAlt: "Opsware Data", // Title for JSONLD
  description:
    "Opsware Data provides data privacy solutions for companies to help them comply with emerging laws such as CCPA, GDPR.",
  url: "https://Opsware.co", // Domain of your site. No trailing slash!
  siteLanguage: "en", // Language Tag on <html> element
  banner: "/Hero.png", // Used for SEO
  ogLanguage: "en_US", // Facebook Language

  // JSONLD / Manifest
  favicon: "src/images/opsware_data_logo_icon.svg", // Used for manifest favicon generation
  shortName: "Opsware", // shortname for manifest. MUST be shorter than 12 characters
  themeColor: "#3D63AE",
  backgroundColor: "#EBEDF2",

  twitter: "@opswaredata", // Twitter Username
  facebook: "opswaredata", // Facebook Site Name
  googleAnalyticsID: "UA-154605502-2",
};
