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
  } = data.allPrismicNavigationBar.edges[0].node.data;
  const { contact, email, phone } = data.allPrismicFooter.edges[0].node.data;

  const productPages = data.allPrismicProductPage.edges.map((page) => {
    const url = page.node.uid;
    const title = page.node.data.page_title.text;
    return { url, title };
  });

  return (
    <nav>
      <NavList>
        <FooterNavItem>
          <Link to={STATIC_ROUTES.HOME}>{homepageNav.text}</Link>
        </FooterNavItem>
        <NavSubList>
          <DesktopNavItem>{productPagesNav.text}</DesktopNavItem>
          {productPages.map(({ url, title }) => (
            <DesktopNavSubitem>
              <Link to={url}>{title}</Link>
            </DesktopNavSubitem>
          ))}
        </NavSubList>
        <FooterNavItem>
          <Link to={STATIC_ROUTES.CUSTOMERS}>{customersPageNav.text}</Link>
        </FooterNavItem>
        <NavSubList>
          <DesktopNavItem>{contact.text}</DesktopNavItem>
          <DesktopNavSubitem>{email.text}</DesktopNavSubitem>
          <DesktopNavSubitem>{phone.text}</DesktopNavSubitem>
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
          }
        }
      }
    }
    allPrismicProductPage {
      edges {
        node {
          data {
            page_title {
              text
            }
          }
          uid
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