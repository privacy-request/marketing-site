import React from "react";
import { Link } from "gatsby";
import {
  DesktopNavItem,
  DesktopNavSubitem,
  HyperLink,
} from "../../../typography";
import { STATIC_ROUTES } from "../../../utils/constants";
import { NavList, NavSubList, NavItem } from "./FooterNav.styles";

const FooterNav = ({
  homepage_nav,
  product_pages_nav,
  product_pages_sub_items,
  contact,
  email,
  phone,
}) => {
  const productPages = product_pages_sub_items.map((subitem) => {
    const url = subitem.route.text;
    const title = subitem.text.text;
    return { url, title };
  });

  return (
    <nav>
      <NavList>
        <NavItem>
          <Link to={STATIC_ROUTES.HOME}>{homepage_nav.text}</Link>
        </NavItem>
        <NavSubList>
          <DesktopNavItem noHover>{product_pages_nav.text}</DesktopNavItem>
          {productPages.map(({ url, title }) => (
            <DesktopNavSubitem key={`footer-nav-${url}`}>
              <Link to={`/${url}`}>{title}</Link>
            </DesktopNavSubitem>
          ))}
        </NavSubList>
        {/* <FooterNavItem>
          <Link to={STATIC_ROUTES.CUSTOMERS}>{customersPageNav.text}</Link>
        </FooterNavItem> */}
        <NavSubList>
          <DesktopNavItem noHover>{contact.text}</DesktopNavItem>
          <DesktopNavSubitem noHover>
            <HyperLink href={`mailto:${email.text}`} target="_blank">
              {email.text}
            </HyperLink>
          </DesktopNavSubitem>
          <DesktopNavSubitem noHover>{phone.text}</DesktopNavSubitem>
        </NavSubList>
      </NavList>
    </nav>
  );
};

export default FooterNav;
