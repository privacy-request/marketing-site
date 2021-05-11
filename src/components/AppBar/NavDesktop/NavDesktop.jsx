import React from "react";
// import { Link } from "gatsby";
import styled from "styled-components";
import { DesktopNavItem, CallToAction } from "../../typography";
import { STATIC_ROUTES } from "../../utils/constants";
import TooltipMenu from "./TooltipMenu";

// const NavLink = styled(Link)`
//   margin-right: ${({ theme: { margin } }) => margin.navItemDesktop};
// `;

const NavList = styled.ul`
  display: flex;
  align-items: center;
`;

const NavDesktop = ({
  getADemoBtnText,
  productPagesNavText,
  productPages,
  customersPageNavText,
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
        {/* <DesktopNavItem>
          <NavLink to={STATIC_ROUTES.CUSTOMERS}>{customersPageNavText}</NavLink>
        </DesktopNavItem> */}
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
