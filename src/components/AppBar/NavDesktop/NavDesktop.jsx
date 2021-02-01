import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { DesktopNavItem, DesktopNavDemo, CallToAction } from "../../typography";
import { STATIC_ROUTES } from "../../utils/constants";
import TooltipMenu from "./TooltipMenu";

const NavLink = styled(Link)`
  margin-right: ${({ theme }) => theme.spacing.navItems};
`;

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
        <DesktopNavItem>
          <NavLink to={STATIC_ROUTES.CUSTOMERS}>{customersPageNavText}</NavLink>
        </DesktopNavItem>
        <DesktopNavItem>
          <CallToAction inverted to={STATIC_ROUTES.CALENDAR}>
            {getADemoBtnText}
          </CallToAction>
        </DesktopNavItem>
      </NavList>
    </nav>
  );
};

export default NavDesktop;
