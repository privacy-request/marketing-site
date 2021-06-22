import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { CallToAction, DesktopNavItem } from "../../../typography";
import { STATIC_ROUTES } from "../../../utils/constants";
import TooltipMenu from "./TooltipMenu";

const NavLink = styled(Link)`
  margin-right: ${({ theme: { margin } }) => margin.navItemDesktop};
`;

const NavList = styled.ul`
  display: flex;
  align-items: center;
`;

const NavDesktop = ({
  getADemoBtnText,
  productPagesNavText,
  productPages,
  contactPageNavText,
  // customersPagesNavText,
  // companyPagesNavText,
  companyPages,
  path,
}) => {
  return (
    <nav>
      <NavList>
        <TooltipMenu
          title={productPagesNavText}
          pages={productPages}
          path={path}
        />
        <DesktopNavItem>
          <NavLink to={`/${companyPages[0].url}`}>
            {companyPages[0].title}
          </NavLink>
        </DesktopNavItem>
        <DesktopNavItem>
          <NavLink to={STATIC_ROUTES.CONTACT}>{contactPageNavText}</NavLink>
        </DesktopNavItem>
        <li>
          <CallToAction inverted="true" to={STATIC_ROUTES.CALENDAR}>
            {getADemoBtnText}
          </CallToAction>
        </li>
      </NavList>
    </nav>
  );
};

export default NavDesktop;
