import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";
import { LegalPageNavItem, LegalPageNavSubItem } from "../typography";
import { SCREEN_SIZES } from "../utils/constants";

const NavWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 3rem;
  min-width: 16rem;
  @media only screen and (max-width: ${SCREEN_SIZES.TABLET}px) {
    flex-direction: row;
    margin-bottom: 3rem;
  }
`;

const PrivacyNav = ({ currentRoute, replaceSpacesWithDashes }) => {
  const data = useStaticQuery(query);

  const navLinks = data.legalPages.edges.map(
    (
      {
        node: {
          data: { title, body },
          route,
        },
      },
      index
    ) => ({
      title: title.text,
      index,
      route,
      subheadings: body.map(({ primary: { heading } }, subindex) => ({
        subheading: heading ? heading.text : "",
        subindex,
      })),
    })
  );
  return (
    <NavWrapper>
      {navLinks.map(({ title, index, subheadings, route }) => (
        <React.Fragment key={`lp-ni-${index}`}>
          <LegalPageNavItem to={`/${route}`}>{title}</LegalPageNavItem>
          {route === currentRoute &&
            subheadings.map(({ subheading }, subindex) => (
              <LegalPageNavSubItem
                to={`/${route}#${replaceSpacesWithDashes(subheading)}`}
                key={`lp-nav-si-${subindex}`}
              >
                {subheading}
              </LegalPageNavSubItem>
            ))}
        </React.Fragment>
      ))}
    </NavWrapper>
  );
};

const query = graphql`
  query PrivacyNavQuery {
    legalPages: allPrismicLegalPage {
      edges {
        node {
          data {
            title: page_title {
              text
            }
            body {
              ... on PrismicLegalPageBodyNumberedSection {
                id
                primary {
                  heading {
                    text
                  }
                }
              }
            }
          }
          route: uid
        }
      }
    }
  }
`;

export default PrivacyNav;
