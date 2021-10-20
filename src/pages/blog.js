import { graphql } from "gatsby";
import React, { useRef, useState, useEffect } from "react";
import Layout from "../components/Layout/Layout";
import Seo from "../components/SEO/SEO";
import styled from "styled-components";
import {
  BlogTitle,
  BlogDescription,
  BlogReadMore,
} from "../components/typography";
import AuthorAndCategory from "../components/Blog/AuthorAndCategory/AuthorAndCategory";
import BookADemoBanner from "../components/BookADemoBanner/BookADemoBanner";
import useIntersection from "../components/utils/useIntersection";
import { Fragment } from "react";
import { navigate } from "gatsby";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 2.4rem;
  margin: 0 auto 4rem auto;
  max-width: 83.3rem;
`;

const Post = styled.article`
  margin: 4rem 0;
  display: flex;
  flex-direction: column;
`;

const PostImage = styled.img`
  max-width: 100%;
  border-radius: 0.8rem;
  cursor: pointer;
  max-height: 400px;
  object-fit: cover;
`;

const TitleAndDescription = styled.div`
  margin-bottom: 3rem;
`;

export const Line = styled.div`
  width: 100%;
  height: 2px;
  background: ${({ theme }) => theme.colour.grey.light};
  margin: 4.6rem 0rem;
`;

const Blog = ({ data, path }) => {
  const { page_description, page_keywords, page_title } =
    data.prismicBlogPage.data;
  const [display, setDisplay] = useState(3);
  const ref = useRef();
  const inViewport = useIntersection(ref, "-100px");
  useEffect(() => {
    inViewport && setDisplay(display + 3);
  }, [inViewport]);

  const blogPosts = data.allPrismicBlogPost.edges;

  blogPosts.sort((a, b) => {
    return new Date(b.node.data.date) - new Date(a.node.data.date);
  });
  const displayedBlogPosts = blogPosts.slice(0, display);

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
        {displayedBlogPosts.map((blogPost, index) => (
          <Fragment key={`blogpost-${blogPost.node.uid}`}>
            <Post ref={index + 1 === display ? ref : null}>
              <PostImage
                onClick={() => navigate(`/blog/${blogPost.node.uid}`)}
                src={blogPost.node.data.image.url}
              ></PostImage>
              <AuthorAndCategory
                avatar={blogPost.node.data.author_avatar}
                authorName={blogPost.node.data.author.text}
                date={blogPost.node.data.date}
                category={blogPost.node.data.category}
              />
              <TitleAndDescription>
                <BlogTitle
                  onClick={() => navigate(`/blog/${blogPost.node.uid}`)}
                >
                  {blogPost.node.data.headline.text}
                </BlogTitle>
                <BlogDescription>
                  {blogPost.node.data.description.text}
                </BlogDescription>
              </TitleAndDescription>
              <BlogReadMore to={`/blog/${blogPost.node.uid}`}>
                Read more
              </BlogReadMore>
            </Post>
            <Line />
            {index === 1 && <BookADemoBanner />}
          </Fragment>
        ))}
      </Wrapper>
    </Layout>
  );
};

export const query = graphql`
  query BlogPageQuery {
    prismicNavigation {
      ...NavigationData
    }
    prismicFooter {
      ...FooterData
    }
    prismicCookieBanner {
      ...CookieBannerData
    }
    prismicBlogPage {
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
