import React from "react";
import { Link } from "gatsby";
import {
  DesktopNavItem,
  DesktopNavSubitem,
  HyperLink,
} from "../../../typography";
import { STATIC_ROUTES } from "../../../utils/constants";
import { NavList, NavSubList, NavItem } from "./FooterNav.styles";

const FooterNav = ({ navItems, contact, email, phone }) => {
  return (
    <nav>
      <NavList>
        <NavItem>
          <Link to={STATIC_ROUTES.HOME}>Home</Link>
        </NavItem>
        {navItems.map((item, index) => {
          switch (item.slice_type) {
            case "navigation_item":
              if (item.primary.route.text === "/contact") {
                return null;
              }
              return (
                <NavItem key={`footerNavItem-${index}`}>
                  <Link to={item.primary.route.text}>
                    {item.primary.text.text}
                  </Link>
                </NavItem>
              );
            case "navigation_dropdown":
              return (
                <NavSubList key={`navSubList-${index}`}>
                  <DesktopNavItem noHover>
                    {item.primary.text.text}
                  </DesktopNavItem>
                  {item.items.map(({ text, route }) => (
                    <DesktopNavSubitem
                      key={`footer-nav-${route.text}-${index}`}
                    >
                      <Link to={route.text}>{text.text}</Link>
                    </DesktopNavSubitem>
                  ))}
                </NavSubList>
              );
            default:
              return null;
          }
        })}
      </NavList>
    </nav>
  );
};

export default FooterNav;
