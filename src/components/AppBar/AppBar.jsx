import React, { useState, useEffect } from "react";
import { useStaticQuery, graphql } from "gatsby";
import { SCREEN_SIZES } from "../utils/constants";
import AppBarContainer from "./AppBarContainer";
import Logo from "./Logo";
import NavDesktop from "./NavDesktop/NavDesktop";
import NavMobile from "./NavMobile/NavMobile";

const AppBar = ({ path }) => {
  const data = useStaticQuery(query);
  const [isMobile, setIsMobile] = useState(false);

  const handleWindowResize = () => {
    const mobileThresholdMet = window.innerWidth < SCREEN_SIZES.TABLET;
    mobileThresholdMet !== isMobile && setIsMobile(mobileThresholdMet);
  };

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    handleWindowResize();
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  });

  const {
    product_pages_nav,
    customers_page_nav,
    contact_page_nav,
    homepage_nav,
    get_a_demo_button,
    logo_text,
    logo_icon,
  } = data.allPrismicNavigationBar.edges[0].node.data;
  const getADemoBtnText = get_a_demo_button.text;
  const productPagesNavText = product_pages_nav.text;
  const customersPageNavText = customers_page_nav.text;
  const contactPageNavText = contact_page_nav.text;
  const homepageNavText = homepage_nav.text;

  const productPages = data.allPrismicProductPage.edges.map((page) => {
    const url = page.node.uuid;
    const title = page.node.data.page_title.text;
    return { url, title };
  });

  const navProps = {
    getADemoBtnText,
    productPagesNavText,
    customersPageNavText,
    contactPageNavText,
    homepageNavText,
    productPages,
    path,
  };

  return (
    <AppBarContainer>
      <Logo logoIconUrl={logo_icon.url} logoTextUrl={logo_text.url} />
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
            product_pages_nav {
              text
            }
            get_a_demo_button {
              text
            }
            logo_text {
              url
              alt
            }
            logo_icon {
              url
              alt
            }
            customers_page_nav {
              text
            }
            homepage_nav {
              text
            }
            contact_page_nav {
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
  }
`;

export default AppBar;
