import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout/Layout";
import Seo from "../components/SEO/SEO";
import { withPreview } from "gatsby-source-prismic";
import { BlogPostTitle, BlogPostDate } from "../components/typography";
import {
  Wrapper,
  BlogPostImage,
} from "../components/Blog/BlogPost/BlogPost.styles";
import AuthorAndCategory from "../components/Blog/AuthorAndCategory/AuthorAndCategory";
import SliceZone from "../components/Slices/SliceZone";

const BlogPost = ({ data, path }) => {
  const {
    page_title,
    page_description,
    page_keywords,
    author,
    author_avatar,
    body,
    headline,
    image,
    date,
    category,
  } = data.prismicBlogPost.data;
  const postDate = new Date(date).toLocaleString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <Layout
      navigationData={data.prismicNavigation.data}
      footerData={data.prismicFooter.data}
      cookieBannerData={data.prismicCookieBanner.data}
    >
      <Seo
        title={page_title.text}
        desc={page_description.text}
        path={path}
        keywords={page_keywords}
      />
      <Wrapper>
        <BlogPostTitle>{headline.text}</BlogPostTitle>
        <BlogPostDate>{postDate}</BlogPostDate>
        <BlogPostImage src={image.url} />
        <SliceZone
          slices={body}
          bookADemoBannerData={data.prismicBookADemoBanner.data}
        />
        <AuthorAndCategory
          avatar={author_avatar}
          authorName={author.text}
          category={category}
        />
      </Wrapper>
    </Layout>
  );
};

export const query = graphql`
  query BlogPostQuery($slug: String) {
    prismicNavigation {
      ...NavigationData
    }
    prismicBookADemoBanner {
      ...BookADemoBannerData
    }
    prismicFooter {
      ...FooterData
    }
    prismicCookieBanner {
      ...CookieBannerData
    }
    allPrismicLegalPage {
      edges {
        node {
          data {
            header {
              text
            }
          }
          uid
        }
      }
    }
    prismicBlogPost(uid: { eq: $slug }) {
      uid
      data {
        page_description {
          text
        }
        page_keywords {
          keyword {
            text
          }
        }
        category
        page_title {
          text
        }
        author {
          text
        }
        author_avatar {
          url
        }
        headline {
          text
        }
        description {
          text
        }
        image {
          url
        }
        date
        body {
          ... on PrismicBlogPostBodyRichTextSection {
            id
            primary {
              content {
                raw
              }
            }
            slice_type
          }
          ... on PrismicBlogPostBodyTable5Col {
            id
            items {
              col1 {
                raw
              }
              col2 {
                raw
              }
              col3 {
                raw
              }
              col4 {
                raw
              }
              col5 {
                raw
              }
            }
            primary {
              col1 {
                raw
              }
              col2 {
                raw
              }
              col3 {
                raw
              }
              col4 {
                raw
              }
              col5 {
                raw
              }
            }
            slice_type
          }
          ... on PrismicBlogPostBodyTable2Col {
            id
            items {
              col1 {
                raw
              }
              col2 {
                raw
              }
            }
            primary {
              col1 {
                raw
              }
              col2 {
                raw
              }
            }
            slice_type
          }
          ... on PrismicBlogPostBodyBookADemoBanner {
            slice_type
          }
        }
      }
    }
  }
`;

export default withPreview(BlogPost);
