import React from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";
import Facebook from "./Facebook";
import Twitter from "./Twitter";

const SEO = ({ title, desc, path }) => {
  const { site } = useStaticQuery(query);

  const {
    siteMetadata: {
      siteUrl,
      defaultTitle,
      defaultDescription,
      defaultBanner,
      siteLanguage,
      ogLanguage,
      twitter,
      facebook,
    },
  } = site;

  const seo = {
    title: title || defaultTitle,
    description: desc || defaultDescription,
    image: defaultBanner,
    url: `${siteUrl}${path || ""}`,
  };

  return (
    <>
      <Helmet title={seo.title}>
        <html lang={siteLanguage} />
        <meta name="description" content={seo.description} />
        <meta name="image" content={seo.image} />
      </Helmet>
      <Facebook
        desc={seo.description}
        image={seo.image}
        title={seo.title}
        type={"website"}
        url={seo.url}
        locale={ogLanguage}
        name={facebook}
      />
      <Twitter
        title={seo.title}
        image={seo.image}
        desc={seo.description}
        username={twitter}
      />
    </>
  );
};

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        siteUrl
        defaultTitle: title
        defaultDescription: description
        defaultBanner: banner
        siteLanguage
        ogLanguage
        twitter
        facebook
      }
    }
  }
`;

export default SEO;
