import React from "react";
import { graphql } from "gatsby";
import { withPreview } from "gatsby-source-prismic";
import Layout from "../components/Layout/Layout";
import Seo from "../components/SEO/SEO";
import Hero from "../components/Homepage/Hero/Hero";
import TrustedCustomers from "../components/TrustedCustomers/TrustedCustomers";
import HomepageProducts from "../components/Homepage/Products/Products";
import Testimonials from "../components/Testimonials/Testimonials";
import BookADemo from "../components/BookADemo/BookADemo";
import { HomepageContainer } from "../components/Homepage/Homepage.styles";

const Homepage = ({ path, data }) => {
  const {
    page_description,
    page_keywords,
    page_title,
    headline_prefix,
    headline_typewriter,
    subheadline,
    loop_words,
    typing_speed,
    backspace_delay,
    body,
  } = data.prismicHomepage.data;
  return (
    <Layout
      path={path}
      navigationBarData={data.prismicNavigationBar.data}
      footerData={data.prismicFooter.data}
      cookieBannerData={data.prismicCookieBanner.data}
    >
      <Seo
        title={page_title.text}
        desc={page_description.text}
        path={path}
        keywords={page_keywords}
      />
      <HomepageContainer>
        <Hero
          {...{
            headline_prefix,
            headline_typewriter,
            subheadline,
            loop_words,
            typing_speed,
            backspace_delay,
          }}
        />
        <TrustedCustomers {...data.prismicTrustedCustomers.data} />
      </HomepageContainer>
      <HomepageProducts productSections={body} />
      <Testimonials {...data.prismicTestimonials.data} />
      <BookADemo {...data.prismicMailingListForm.data} />
    </Layout>
  );
};

export const query = graphql`
  query homepageQuery {
    prismicHomepage {
      data {
        page_description {
          text
        }
        page_keywords {
          keyword {
            text
          }
        }
        page_title {
          text
        }
      }
      id
      type
      prismicId
    }
    prismicNavigationBar {
      ...NavigationData
    }
    prismicFooter {
      ...FooterData
    }
    prismicCookieBanner {
      ...CookieBannerData
    }
    prismicHomepage {
      ...HeroData
      ...ProductsData
    }
    prismicTrustedCustomers {
      ...TrustedCustomersData
    }
    prismicTestimonials {
      ...TestimonialsData
    }
    prismicMailingListForm {
      ...BookADemoData
    }
  }
`;

export default withPreview(Homepage);
