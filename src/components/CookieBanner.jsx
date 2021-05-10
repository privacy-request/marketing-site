import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";
import { useLocation } from "@reach/router";
import { initializeAndTrack } from "gatsby-plugin-gdpr-cookies";
import {
  CookieBannerText,
  AcceptLink,
  DoNotAcceptLink,
  LearnMoreLink,
} from "./typography";
import Close from "../../assets/close.svg";
import Expand from "../../assets/expand.svg";
import { STATIC_ROUTES, SCREEN_SIZES } from "./utils/constants";
import { useCookies } from "react-cookie";

const Wrapper = styled.div`
  box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  width: 41rem;
  position: fixed;
  bottom: 3rem;
  right: 4rem;
  z-index: 5;
  background: white;
  padding: 1.8rem 2.5rem;

  @media only screen and (max-width: ${SCREEN_SIZES.TABLET}px) {
    bottom: 0;
    left: 0;
    width: 100%;
    box-sizing: border-box;
    border-radius: 0px;
    padding-top: 2.5rem;
  }
`;

const LinksWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Notification = styled.div`
  position: relative;
`;

const CloseBtn = styled(Close)`
  position: absolute;
  right: -0.9rem;
  top: -0.9rem;
  cursor: pointer;
  :hover {
    opacity: ${({ theme }) => theme.textDecoration.opacity};
  }
  @media only screen and (max-width: ${SCREEN_SIZES.TABLET}px) {
    right: -1.4rem;
    top: -0.9rem;
  }
`;

const AnimatedCookieBannerText = styled(CookieBannerText)`
  max-height: 53px;
  transition: max-height 1s ease-in;

  ${({ expanded }) => expanded && "max-height: 1000px;"}
  height: auto;
  overflow: hidden;
`;

const ExpandBtn = styled(Expand)`
  margin-left: 2rem;
  cursor: pointer;
  :hover {
    opacity: ${({ theme }) => theme.textDecoration.opacity};
  }
`;

const CookieBanner = () => {
  const [cookies, setCookie] = useCookies(["gatsby-gdpr-google-analytics"]);
  const [expanded, setExpanded] = useState(false);
  const [hidden, setHidden] = useState(false);
  useEffect(() => {
    cookies.hasOwnProperty("gatsby-gdpr-google-analytics") && setHidden(true);
  }, [cookies]);
  const data = useStaticQuery(query);
  const {
    accept,
    collapsedText,
    doNotAccept,
    expandedText,
    learnMoreLink,
  } = data.allPrismicCookieBanner.edges[0].node.data;
  const location = useLocation();

  const cookieOptions = { path: "/", maxAge: 300000 };
  const acceptCookies = () => {
    setCookie("gatsby-gdpr-google-analytics", true, cookieOptions);
    initializeAndTrack(location);
    setHidden(true);
  };

  const declineCookies = () => {
    setCookie("gatsby-gdpr-google-analytics", false, cookieOptions);
    setHidden(true);
  };

  return (
    <>
      {!hidden && (
        <Wrapper>
          <Notification>
            <CloseBtn onClick={() => setHidden(true)} />
            <AnimatedCookieBannerText expanded={expanded}>
              {expanded ? expandedText.text : collapsedText.text}
              {expanded ? (
                <LearnMoreLink to={STATIC_ROUTES.PRIVACY_POLICY}>
                  {learnMoreLink.text}
                </LearnMoreLink>
              ) : (
                <ExpandBtn onClick={() => setExpanded(true)} />
              )}
            </AnimatedCookieBannerText>
            <LinksWrapper>
              <DoNotAcceptLink onClick={declineCookies}>
                {doNotAccept.text}
              </DoNotAcceptLink>
              <AcceptLink onClick={acceptCookies}>{accept.text}</AcceptLink>
            </LinksWrapper>
          </Notification>
        </Wrapper>
      )}
    </>
  );
};

const query = graphql`
  query CookieBannerQuery {
    allPrismicCookieBanner {
      edges {
        node {
          data {
            accept {
              text
            }
            doNotAccept: do_not_accept {
              text
            }
            collapsedText: collapsed_text {
              text
            }
            expandedText: expanded_text {
              text
            }
            learnMoreLink: learn_more_link {
              text
            }
          }
        }
      }
    }
  }
`;

export default CookieBanner;
