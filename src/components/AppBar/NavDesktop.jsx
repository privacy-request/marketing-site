import React from "react";
import { Link } from "gatsby";
import styled, { withTheme } from "styled-components";
import { NavItem } from "../utils/typography";
import { STATIC_ROUTES } from "../utils/constants";
import NavTooltip from "./NavTooltip";

const Nav = styled.nav``;

const NavLink = styled(Link)`
  margin-right: ${({ theme }) => theme.spacing.nav_items};
  text-decoration: none;
  ${NavItem}:hover & {
    opacity: ${({ theme }) => theme.text_decoration.opacity};
  }
`;

const GetADemoBtn = styled(Link)`
  color: ${({ theme }) => theme.colour.blue.dark};
  text-decoration: none;
  border: 2px solid ${({ theme }) => theme.colour.blue.dark};
  border-radius: 4rem;
  box-sizing: border-box;
  height: 4.8rem;
  width: 14.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const NavUL = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
`;

const NavDesktop = ({
  getADemoBtnText,
  productPagesNavText,
  productPages,
  customersPageNavText,
  path,
  theme,
}) => {
  return (
    <Nav>
      <NavUL>
        <NavTooltip
          title={productPagesNavText}
          pages={productPages}
          path={path}
        />
        <NavItem active={path === STATIC_ROUTES.CUSTOMERS} bold>
          <NavLink to={STATIC_ROUTES.CUSTOMERS}>{customersPageNavText}</NavLink>
        </NavItem>
        <NavItem bold colour={theme.colour.blue.dark}>
          <GetADemoBtn to={STATIC_ROUTES.CUSTOMERS}>
            {getADemoBtnText}
          </GetADemoBtn>
        </NavItem>
      </NavUL>
    </Nav>
  );
};

export default withTheme(NavDesktop);
