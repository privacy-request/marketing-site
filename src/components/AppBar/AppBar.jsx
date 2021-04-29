import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import AppBarContainer from "./AppBarContainer";
import Logo from "./Logo";
import NavDesktop from "./NavDesktop/NavDesktop";
import NavMobile from "./NavMobile/NavMobile";
import isMobileScreen from "../utils/isMobileScreen";

const AppBar = ({ path }) => {
  const data = useStaticQuery(query);
  const isMobile = isMobileScreen();

  const {
    productPagesNav,
    customersPageNav,
    contactPageNav,
    homepageNav,
    getADemoBtn,
    logoText,
    logoIcon,
    productPagesSubitems,
  } = data.allPrismicNavigationBar.edges[0].node.data;

  const productPages = productPagesSubitems.map((subitem) => {
    const url = subitem.route.text;
    const title = subitem.text.text;
    return { url, title };
  });

  const navProps = {
    getADemoBtnText: getADemoBtn.text,
    productPagesNavText: productPagesNav.text,
    customersPageNavText: customersPageNav.text,
    contactPageNavText: contactPageNav.text,
    homepageNavText: homepageNav.text,
    productPages,
    path,
  };

  return (
    <AppBarContainer>
      <Logo logoIcon={logoIcon} logoText={logoText} />
      {isMobile ? <NavMobile {...navProps} /> : <NavDesktop {...navProps} />}
    </AppBarContainer>
  );
};

const query = graphql`
  query HeadingQuery {
    allPrismicNavigationBar {
      edges {
        node {
          data {
            productPagesNav: product_pages_nav {
              text
            }
            getADemoBtn: get_a_demo_button {
              text
            }
            logoText: logo_text {
              url
              alt
              dimensions {
                height
                width
              }
            }
            logoIcon: logo_icon {
              url
              alt
              dimensions {
                height
                width
              }
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
  }
`;

export default AppBar;
