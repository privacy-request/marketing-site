import React, { useState, useEffect } from "react";
import { useLocation } from "@reach/router";
import { initializeAndTrack } from "gatsby-plugin-gdpr-cookies";
import { AcceptLink, DoNotAcceptLink, LearnMoreLink } from "../typography";
import { STATIC_ROUTES } from "../utils/constants";
import { useCookies } from "react-cookie";
import {
  Wrapper,
  Links,
  Notification,
  CloseBtn,
  AnimatedCookieBannerText,
  ExpandBtn,
} from "./CookieBanner.styles";

const CookieBanner = ({
  accept,
  collapsed_text,
  do_not_accept,
  expanded_text,
  learn_more_link,
}) => {
  const [cookies, setCookie] = useCookies(["gatsby-gdpr-google-analytics"]);
  const [expanded, setExpanded] = useState(false);
  const [hidden, setHidden] = useState(true);

  useEffect(() => {
    !cookies.hasOwnProperty("gatsby-gdpr-google-analytics") && setHidden(false);
  }, [cookies]);

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
              {expanded ? expanded_text.text : collapsed_text.text}
              {expanded ? (
                <LearnMoreLink to={STATIC_ROUTES.PRIVACY_POLICY}>
                  {learn_more_link.text}
                </LearnMoreLink>
              ) : (
                <ExpandBtn onClick={() => setExpanded(true)} />
              )}
            </AnimatedCookieBannerText>
            <Links>
              <DoNotAcceptLink onClick={declineCookies}>
                {do_not_accept.text}
              </DoNotAcceptLink>
              <AcceptLink onClick={acceptCookies}>{accept.text}</AcceptLink>
            </Links>
          </Notification>
        </Wrapper>
      )}
    </>
  );
};

export default CookieBanner;
