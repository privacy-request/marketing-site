import React from "react";
import { graphql, useStaticQuery, Link } from "gatsby";
import { PrivacyCenterTitle, PrivacyCenterNavItem } from "../typography";
import { SCREEN_SIZES } from "../utils/constants";
import styled from "styled-components";
import Image from "../Image";

const PrivacyCenterIcon = styled(Image)`
  margin-right: 1rem;
  margin-bottom: 0.9rem;
`;

const IconAndTitle = styled.div`
  display: flex;
  align-items: center;
  margin-right: 3.3rem;
  margin-bottom: 2rem;
  @media only screen and (max-width: ${SCREEN_SIZES.TABLET}px) {
    flex-direction: column;
    margin-right: 0rem;
    margin-bottom: 0.6rem;
  }
`;

const Wrapper = styled.div`
  display: flex;
  @media only screen and (max-width: ${SCREEN_SIZES.TABLET}px) {
    flex-direction: column;
    align-items: center;
  }
`;

const PrivacyCenterList = styled.ul`
  margin-top: 1rem;
`;

const FooterPrivacyCenter = () => {
  const data = useStaticQuery(query);
  const {
    privacyCenter,
    privacyCenterIcon,
    privacyCenterLinks,
  } = data.allPrismicFooter.edges[0].node.data;
  return (
    <Wrapper>
      <IconAndTitle>
        <PrivacyCenterIcon image={privacyCenterIcon} />
        <PrivacyCenterTitle>{privacyCenter.text}</PrivacyCenterTitle>
      </IconAndTitle>
      <PrivacyCenterList>
        {privacyCenterLinks.map((link) => (
          <PrivacyCenterNavItem key={`footer-pc-nav-${link.route.text}`}>
            <Link to={link.route.text}>{link.text.text}</Link>
          </PrivacyCenterNavItem>
        ))}
      </PrivacyCenterList>
    </Wrapper>
  );
};

const query = graphql`
  query FooterPrivacyCenterQuery {
    allPrismicFooter {
      edges {
        node {
          data {
            privacyCenter: privacy_center {
              text
            }
            privacyCenterIcon: privacy_center_icon {
              url
              alt
              dimensions {
                height
                width
              }
            }
            privacyCenterLinks: privacy_center_links {
              route {
                text
              }
              text {
                text
              }
            }
          }
        }
      }
    }
  }
`;

export default FooterPrivacyCenter;
