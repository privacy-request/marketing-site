import React from "react";
import { Link } from "gatsby";
import {
  DesktopNavItem,
  DesktopNavSubitem,
  HyperLink,
} from "../../../typography";
import { STATIC_ROUTES } from "../../../utils/constants";
import { NavList, NavSubList, NavItem } from "./FooterNav.styles";
import { formatPages } from "../../../utils/helpers";

const FooterNav = ({
  homepage_nav,
  product_pages_nav,
  product_pages_sub_items,
  contact,
  email,
  phone,
  company_pages_nav,
  company_pages_sub_items,
}) => {
  const productPages = formatPages(product_pages_sub_items);
  const companyPages = formatPages(company_pages_sub_items);

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
        <NavSubList>
          <DesktopNavItem noHover>{company_pages_nav.text}</DesktopNavItem>
          {companyPages.map(({ url, title }) => (
            <DesktopNavSubitem key={`footer-nav-${url}`}>
              <Link to={`/${url}`}>{title}</Link>
            </DesktopNavSubitem>
          ))}
        </NavSubList>
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
