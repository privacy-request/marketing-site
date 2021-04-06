import React from "react";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";
import { LegalPageNavItem } from "../typography";
import { useLocation } from "@reach/router";
import { SCREEN_SIZES } from "../utils/constants";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 3rem;
  min-width: 16rem;
  @media only screen and (max-width: ${SCREEN_SIZES.TABLET}px) {
    flex-direction: row;
    margin-bottom: 3rem;
  }
`;

const LegalPageNav = () => {
  const location = useLocation();
  const data = useStaticQuery(query);
  const navItems = data.allPrismicLegalPage.edges.map(
    ({
      node: {
        data: { title },
        uid,
      },
    }) => ({
      title,
      uid,
    })
  );

  return (
    <Wrapper>
      {navItems.map((item) => (
        <LegalPageNavItem
          active={location.pathname.startsWith(`/${item.uid}`)}
          to={`/${item.uid}`}
        >
          {item.title.text.toUpperCase()}
        </LegalPageNavItem>
      ))}
    </Wrapper>
  );
};

const query = graphql`
  query LegalPageNavQuery {
    allPrismicLegalPage {
      edges {
        node {
          data {
            title: page_title {
              text
            }
          }
          uid
        }
      }
    }
  }
`;

export default LegalPageNav;
