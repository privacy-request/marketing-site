import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout/Layout";
import Seo from "../components/SEO/SEO";
import { BlogPostTitle, BlogPostDate } from "../components/typography";
import {
  Wrapper,
  BlogPostImage,
} from "../components/Blog/BlogPost/BlogPost.styles";
import AuthorAndCategory from "../components/Blog/AuthorAndCategory/AuthorAndCategory";
import SliceZone from "../components/Slices/SliceZone";
import { withPrismicPreview } from "gatsby-plugin-prismic-previews";
import { linkResolver } from "../utils/linkResolver";

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
    timeZone: "UTC",
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
        banner={image.url}
      />
      <Wrapper>
        <BlogPostTitle>{headline.text}</BlogPostTitle>
        <BlogPostDate>{postDate}</BlogPostDate>
        <BlogPostImage src={image.url} />
        <SliceZone slices={body} />
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
      _previewable
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
          ... on PrismicBlogPostDataBodyRichTextSection {
            id
            primary {
              content {
                richText
              }
            }
            slice_type
          }
          ... on PrismicBlogPostDataBodyTable5Col {
            id
            items {
              col1 {
                richText
              }
              col2 {
                richText
              }
              col3 {
                richText
              }
              col4 {
                richText
              }
              col5 {
                richText
              }
            }
            primary {
              col1 {
                text
              }
              col2 {
                text
              }
              col3 {
                text
              }
              col4 {
                text
              }
              col5 {
                text
              }
            }
            slice_type
          }
          ... on PrismicBlogPostDataBodyTable4Col {
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
            }
            primary {
              col1 {
                text
              }
              col2 {
                text
              }
              col3 {
                text
              }
              col4 {
                text
              }
            }
            slice_type
          }
          ... on PrismicBlogPostDataBodyTable3Col {
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
            }
            primary {
              col1 {
                text
              }
              col2 {
                text
              }
              col3 {
                text
              }
            }
            slice_type
          }
          ... on PrismicBlogPostDataBodyTable2Col {
            id
            items {
              col1 {
                richText
              }
              col2 {
                richText
              }
            }
            primary {
              col1 {
                text
              }
              col2 {
                text
              }
            }
            slice_type
          }
          ... on PrismicBlogPostDataBodyBookADemoBanner {
            slice_type
          }
          ... on PrismicBlogPostDataBodyNestedList {
            slice_type
            slice_label
            items {
              list_item {
                text
              }
              nested_list {
                richText
              }
            }
          }
        }
      }
    }
  }
`;

export default withPrismicPreview(BlogPost);
