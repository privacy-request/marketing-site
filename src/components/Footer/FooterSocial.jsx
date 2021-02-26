import React from "react";
import styled from "styled-components";
import { graphql, useStaticQuery } from "gatsby";
import { Copyright } from "../typography";
import { SCREEN_SIZES } from "../utils/constants";
import Image from "../Image";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 5.6rem 0 6rem 0;
  @media only screen and (max-width: ${SCREEN_SIZES.TABLET}px) {
    margin-top: 3rem;
  }

  @media only screen and (max-width: ${SCREEN_SIZES.TABLET}px) {
    flex-direction: column-reverse;
    align-items: center;
    justify-content: center;
  }
`;

const SocialMedia = styled.div`
  margin-right: 8rem;
  @media only screen and (max-width: ${SCREEN_SIZES.TABLET}px) {
    margin-right: 0;
    margin-bottom: 3rem;
  }
`;

const SocialMediaLink = styled.a`
  margin-left: 1.4rem;
  @media only screen and (max-width: ${SCREEN_SIZES.TABLET}px) {
    margin: 0.6rem;
  }
`;

const FooterSocial = () => {
  const data = useStaticQuery(query);
  const {
    copyright,
    socialMediaLinks,
  } = data.allPrismicFooter.edges[0].node.data;
  return (
    <Wrapper>
      <Copyright>{copyright.text}</Copyright>
      <SocialMedia>
        {socialMediaLinks.map((link) => (
          <SocialMediaLink href={link.url.url} target="_blank" rel="noreferrer">
            <Image image={link.icon} />
          </SocialMediaLink>
        ))}
      </SocialMedia>
    </Wrapper>
  );
};

const query = graphql`
  query FooterSocialQuery {
    allPrismicFooter {
      edges {
        node {
          data {
            copyright {
              text
            }
            socialMediaLinks: social_media_links {
              icon {
                url
                dimensions {
                  height
                  width
                }
                alt
              }
              url {
                url
              }
            }
          }
        }
      }
    }
  }
`;

export default FooterSocial;
