import React, { useState, useEffect } from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import Hamburger from "./Hamburger";
import { MobileNavItem, MobileNavDemo } from "../../../typography";
import { STATIC_ROUTES, SCREEN_SIZES } from "../../../utils/constants";
import AccordionMenu from "./AccordionMenu";

const MobileMenu = styled.ul`
  position: absolute;
  height: calc(100vh - ${({ theme: { height } }) => height.appBar.desktop});
  width: 100vw;
  background: ${({ theme }) => theme.colour.blue.dark};
  top: ${({ theme: { height } }) => height.appBar.desktop};
  left: 0;
  z-index: 4;
  opacity: ${({ isOpen }) => (isOpen ? "1" : "0.5")};
  transition: all 0.25s cubic-bezier(1, 0, 1, 0);
  transform-origin: top left;
  transform: scale(${({ isOpen }) => (isOpen ? "1" : "0")}, 1);

  @media only screen and (max-width: ${SCREEN_SIZES.LAPTOP}px) {
    top: ${({ theme: { height } }) => height.appBar.mobile};
    height: calc(100vh - ${({ theme: { height } }) => height.appBar.mobile});
    transition: all 0.25s cubic-bezier(0, 1, 0, 1);
  }
`;

const MobileMenuList = styled.ul`
  padding: 2.8rem ${({ theme: { padding } }) => padding.site};
`;

const NavMobile = ({ items, path }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflowY = isOpen ? "hidden" : "scroll";
    return () => {
      document.body.style.overflowY = "scroll";
    };
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav>
      <Hamburger active={isOpen} onClick={toggleMenu} />
      <MobileMenu isOpen={isOpen}>
        <MobileMenuList>
          <MobileNavItem
            active={path === STATIC_ROUTES.HOME}
            onClick={toggleMenu}
          >
            <Link to={STATIC_ROUTES.HOME}>Home</Link>
          </MobileNavItem>
          {items.map((item, index) => {
            switch (item.slice_type) {
              case "navigation_item":
                return (
                  <MobileNavItem
                    key={`mobileNavItem-${index}`}
                    onClick={toggleMenu}
                  >
                    <Link to={item.primary.route.text}>
                      {item.primary.text.text}
                    </Link>
                  </MobileNavItem>
                );
              case "navigation_dropdown":
                return (
                  <MobileNavItem key={`accordionMenu-${index}`}>
                    <AccordionMenu
                      title={item.primary.text.text}
                      items={item.items}
                      path={path}
                      parentMenuOpen={isOpen}
                      toggleMenu={toggleMenu}
                    />
                  </MobileNavItem>
                );
              case "call_to_action":
                return (
                  <MobileNavDemo
                    key={`mobileNavDemo-${index}`}
                    active={path === item.primary.route.text}
                    onClick={toggleMenu}
                  >
                    <Link to={item.primary.route.text}>
                      {item.primary.text.text}
                    </Link>
                  </MobileNavDemo>
                );
              default:
                return null;
            }
          })}
        </MobileMenuList>
      </MobileMenu>
    </nav>
  );
};

export default NavMobile;
