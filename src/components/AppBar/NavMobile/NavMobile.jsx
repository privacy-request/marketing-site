import React, { useState } from "react";
import { Link } from "gatsby";
import styled, { withTheme } from "styled-components";
import Hamburger from "./Hamburger";
import { NavItem } from "../../typography";
import { STATIC_ROUTES, SCREEN_SIZES } from "../../utils/constants";
import AccordionMenu from "./AccordionMenu";

const Nav = styled.nav``;

const MobileMenu = styled.ul`
  position: absolute;
  height: calc(100vh - ${({ theme }) => theme.dimensions.app_bar_height});
  width: 100vw;
  background: ${({ theme }) => theme.colour.blue.dark};
  top: ${({ theme }) => theme.dimensions.app_bar_height};
  left: 0;
  opacity: ${({ isOpen }) => (isOpen ? "1" : "0.5")};
  transition: all 0.25s cubic-bezier(1, 0, 1, 0);
  transform-origin: top left;
  transform: scale(${({ isOpen }) => (isOpen ? "1" : "0")}, 1);

  @media only screen and (max-width: ${SCREEN_SIZES.TABLET}px) {
    top: ${({ theme }) => theme.dimensions.app_bar_height_mobile};
    height: calc(
      100vh - ${({ theme }) => theme.dimensions.app_bar_height_mobile}
    );
    transition: all 0.25s cubic-bezier(0, 1, 0, 1);
  }
`;

const MobileMenuList = styled.ul`
  padding: 2.8rem ${({ theme }) => theme.spacing.page_horizontal};
`;

const NavMobile = ({
  getADemoBtnText,
  productPagesNavText,
  customersPageNavText,
  contactPageNavText,
  homepageNavText,
  productPages,
  path,
  theme,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navItemFontSize = theme.font_size.link.large;
  const navItemProps = {
    fontSize: theme.font_size.link.large,
    colour: theme.colour.white,
    bold: true,
  };

  return (
    <Nav>
      <Hamburger active={isOpen} onClick={toggleMenu} />
      <MobileMenu isOpen={isOpen}>
        <MobileMenuList>
          <NavItem {...navItemProps} active={path === STATIC_ROUTES.HOME}>
            <Link to={STATIC_ROUTES.HOME}>{homepageNavText}</Link>
          </NavItem>
          <NavItem {...navItemProps}>
            <AccordionMenu
              fontSize={navItemFontSize}
              title={productPagesNavText}
              pages={productPages}
              path={path}
              parentMenuOpen={isOpen}
            />
          </NavItem>
          <NavItem {...navItemProps} active={path === STATIC_ROUTES.CUSTOMERS}>
            <Link to={STATIC_ROUTES.CUSTOMERS}>{customersPageNavText}</Link>
          </NavItem>
          <NavItem {...navItemProps} active={path === STATIC_ROUTES.CONTACT}>
            <Link to={STATIC_ROUTES.CONTACT}>{contactPageNavText}</Link>
          </NavItem>
          <NavItem
            fontSize={navItemFontSize}
            bold
            colour={theme.colour.yellow}
            active={path === STATIC_ROUTES.CALENDAR}
          >
            <Link to={STATIC_ROUTES.CALENDAR}>{getADemoBtnText}</Link>
          </NavItem>
        </MobileMenuList>
      </MobileMenu>
    </Nav>
  );
};

export default withTheme(NavMobile);
