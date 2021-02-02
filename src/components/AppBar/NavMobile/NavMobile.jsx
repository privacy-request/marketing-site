import React, { useState } from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import Hamburger from "./Hamburger";
import { MobileNavItem, MobileNavDemo } from "../../typography";
import { STATIC_ROUTES, SCREEN_SIZES } from "../../utils/constants";
import AccordionMenu from "./AccordionMenu";

const MobileMenu = styled.ul`
  position: absolute;
  height: calc(100vh - ${({ theme }) => theme.dimensions.appBarHeight});
  width: 100vw;
  background: ${({ theme }) => theme.colour.blue.dark};
  top: ${({ theme }) => theme.dimensions.appBarHeight};
  left: 0;
  z-index: 1;
  opacity: ${({ isOpen }) => (isOpen ? "1" : "0.5")};
  transition: all 0.25s cubic-bezier(1, 0, 1, 0);
  transform-origin: top left;
  transform: scale(${({ isOpen }) => (isOpen ? "1" : "0")}, 1);

  @media only screen and (max-width: ${SCREEN_SIZES.LAPTOP}px) {
    top: ${({ theme }) => theme.dimensions.appBarHeightMobile};
    height: calc(100vh - ${({ theme }) => theme.dimensions.appBarHeightMobile});
    transition: all 0.25s cubic-bezier(0, 1, 0, 1);
  }
`;

const MobileMenuList = styled.ul`
  padding: 2.8rem ${({ theme }) => theme.spacing.pageHorizontal};
`;

const NavMobile = ({
  getADemoBtnText,
  productPagesNavText,
  customersPageNavText,
  contactPageNavText,
  homepageNavText,
  productPages,
  path,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav>
      <Hamburger active={isOpen} onClick={toggleMenu} />
      <MobileMenu isOpen={isOpen}>
        <MobileMenuList>
          <MobileNavItem active={path === STATIC_ROUTES.HOME}>
            <Link to={STATIC_ROUTES.HOME}>{homepageNavText}</Link>
          </MobileNavItem>
          <MobileNavItem>
            <AccordionMenu
              title={productPagesNavText}
              pages={productPages}
              path={path}
              parentMenuOpen={isOpen}
            />
          </MobileNavItem>
          <MobileNavItem active={path === STATIC_ROUTES.CUSTOMERS}>
            <Link to={STATIC_ROUTES.CUSTOMERS}>{customersPageNavText}</Link>
          </MobileNavItem>
          <MobileNavItem active={path === STATIC_ROUTES.CONTACT}>
            <Link to={STATIC_ROUTES.CONTACT}>{contactPageNavText}</Link>
          </MobileNavItem>
          <MobileNavDemo active={path === STATIC_ROUTES.CALENDAR}>
            <Link to={STATIC_ROUTES.CALENDAR}>{getADemoBtnText}</Link>
          </MobileNavDemo>
        </MobileMenuList>
      </MobileMenu>
    </nav>
  );
};

export default NavMobile;
