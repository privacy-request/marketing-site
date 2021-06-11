import React from "react";
import styled from "styled-components";
import { LegalPageNavItem, LegalPageNavSubItem } from "../typography";
import { SCREEN_SIZES } from "../utils/constants";
import { createKeyFromStr } from "../utils/helpers";
import isMobileScreen from "../utils/isMobileScreen";

const NavWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 3rem;
  min-width: 16rem;
  max-width: 31rem;
  @media only screen and (max-width: ${SCREEN_SIZES.LAPTOP}px) {
    margin: 0 0 3rem 0;
  }
`;

const PrivacyNav = ({ currentPage, pages }) => {
  const isMobile = isMobileScreen(SCREEN_SIZES.LAPTOP);
  const navLinks = pages.edges.map(
    (
      {
        node: {
          data: { header },
          uid,
        },
      },
      index
    ) => ({
      header: header.text,
      index,
      uid,
    })
  );

  const subHeadings = currentPage.data.body.reduce((headings, slice) => {
    if (slice.slice_type === "heading") {
      headings.push(slice.primary.heading.text);
    }
    return headings;
  }, []);

  return (
    <NavWrapper>
      {navLinks.map(({ header, index, uid }) => (
        <React.Fragment key={`lp-ni-${index}`}>
          <LegalPageNavItem to={`/${uid}`}>{header}</LegalPageNavItem>
          {uid === currentPage.uid &&
            !isMobile &&
            subHeadings.map((subHeading, subindex) => (
              <LegalPageNavSubItem
                to={`/${uid}#${createKeyFromStr(subHeading)}`}
                key={`lp-nav-si-${subindex}`}
              >
                {subHeading}
              </LegalPageNavSubItem>
            ))}
        </React.Fragment>
      ))}
    </NavWrapper>
  );
};

export default PrivacyNav;
