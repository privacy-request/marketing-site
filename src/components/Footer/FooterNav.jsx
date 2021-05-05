import React from "react";
import { graphql, useStaticQuery, Link } from "gatsby";
import styled, { css } from "styled-components";
import { DesktopNavItem, DesktopNavSubitem } from "../typography";
import { STATIC_ROUTES, SCREEN_SIZES } from "../utils/constants";

const NavList = styled.ul`
  display: flex;
  justify-content: space-between;
  max-width: 100rem;
  box-sizing: border-box;
  flex-wrap: wrap;
  @media only screen and (max-width: ${SCREEN_SIZES.TABLET}px) {
    justify-content: center;
    margin-top: -3rem;
  }
`;

const NavItemStyles = css`
  margin-right: 10rem;
  @media only screen and (max-width: ${SCREEN_SIZES.TABLET}px) {
    min-width: 50%;
    margin-right: 0rem;
    margin-top: 2rem;
    text-align: center;
  }
`;

const NavSubList = styled.ul`
  ${NavItemStyles}
`;

const FooterNavItem = styled(DesktopNavItem)`
  ${NavItemStyles}
`;

const FooterNav = () => {
  const data = useStaticQuery(query);
  const {
    customersPageNav,
    homepageNav,
    productPagesNav,
    productPagesSubitems,
  } = data.allPrismicNavigationBar.edges[0].node.data;
  const { contact, email, phone } = data.allPrismicFooter.edges[0].node.data;

  const productPages = productPagesSubitems.map((subitem) => {
    const url = subitem.route.text;
    const title = subitem.text.text;
    return { url, title };
  });

  return (
    <nav>
      <NavList>
        <FooterNavItem>
          <Link to={STATIC_ROUTES.HOME}>{homepageNav.text}</Link>
        </FooterNavItem>
        <NavSubList>
          <DesktopNavItem noHover>{productPagesNav.text}</DesktopNavItem>
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
          <DesktopNavSubitem noHover>{email.text}</DesktopNavSubitem>
          <DesktopNavSubitem noHover>{phone.text}</DesktopNavSubitem>
        </NavSubList>
      </NavList>
    </nav>
  );
};

const query = graphql`
  query FooterNavQuery {
    allPrismicNavigationBar {
      edges {
        node {
          data {
            productPagesNav: product_pages_nav {
              text
            }
            customersPageNav: customers_page_nav {
              text
            }
            homepageNav: homepage_nav {
              text
            }
            contactPageNav: contact_page_nav {
              text
            }
            productPagesSubitems: product_pages_sub_items {
              route {
                text
              }
              text {
                text
              }
            }
          }
        }
      }
    }
    allPrismicFooter {
      edges {
        node {
          data {
            contact {
              text
            }
            email {
              text
            }
            phone {
              text
            }
          }
        }
      }
    }
  }
`;

export default FooterNav;
