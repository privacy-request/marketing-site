import React from "react";
// import { Link } from "gatsby";
import styled from "styled-components";
import { CallToAction } from "../../../typography";
import { STATIC_ROUTES } from "../../../utils/constants";
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
  customersPagesNavText,
  companyPageNavText,
  CustomerPages,
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
        <TooltipMenu
          title={companyPageNavText}
          pages={CustomerPages}
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
