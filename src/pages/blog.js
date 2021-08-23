import { graphql } from "gatsby";
import React from "react";
import Layout from "../components/Layout/Layout";
import Seo from "../components/SEO/SEO";
import { withPreview } from "gatsby-source-prismic";
import isMobileScreen from "../components/utils/isMobileScreen";
import styled from "styled-components";
import {
  BlogTitle,
  BlogDescription,
  BlogReadMore,
} from "../components/typography";
import AuthorAndCategory from "../components/Blog/AuthorAndCategory/AuthorAndCategory";
import BookADemoBanner from "../components/BookADemoBanner/BookADemoBanner";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 2.4rem;
  margin-bottom: 4rem;
`;

const Post = styled.div`
  margin: 4rem 0;
  max-width: 83.3rem;
`;

const PostImage = styled.img`
  width: 100%;
  border-radius: 0.8rem;
`;

const TitleAndDescription = styled.div`
  margin-bottom: 3rem;
`;

const Blog = ({ data, path }) => {
  //   const { page_description, page_keywords, page_title } =
  //     data.prismicAboutPage.data;
  return (
    <Layout
      navigationData={data.prismicNavigation.data}
      footerData={data.prismicFooter.data}
      cookieBannerData={data.prismicCookieBanner.data}
    >
      {/* <Seo
        title={page_title.text}
        desc={page_description.text}
        path={path}
        keywords={page_keywords}
      /> */}
      <Wrapper>
        {data.allPrismicBlogPost.edges.map((blogPost, index) => (
          <>
            <Post>
              <PostImage src={blogPost.node.data.image.url}></PostImage>
              <AuthorAndCategory
                avatar={blogPost.node.data.author_avatar}
                authorName={blogPost.node.data.author.text}
                date={blogPost.node.data.date}
                category={blogPost.node.data.category}
              />
              <TitleAndDescription>
                <BlogTitle>{blogPost.node.data.headline.text}</BlogTitle>
                <BlogDescription>
                  {blogPost.node.data.description.text}
                </BlogDescription>
              </TitleAndDescription>
              <BlogReadMore to={`/${blogPost.node.uid}`}>
                Read more
              </BlogReadMore>
            </Post>
            {index == 1 && (
              <BookADemoBanner {...data.prismicBookADemoBanner.data} />
            )}
          </>
        ))}
      </Wrapper>
    </Layout>
  );
};

export const query = graphql`
  query BlogPageQuery {
    prismicBookADemoBanner {
      ...BookADemoBannerData
    }
    prismicNavigation {
      ...NavigationData
    }
    prismicFooter {
      ...FooterData
    }
    prismicCookieBanner {
      ...CookieBannerData
    }
    allPrismicBlogPost {
      edges {
        node {
          uid
          data {
            author {
              text
            }
            author_avatar {
              alt
              url
            }
            headline {
              text
            }
            description {
              text
            }
            image {
              alt
              url
            }
            category
            date
          }
        }
      }
    }
  }
`;

export default Blog;
