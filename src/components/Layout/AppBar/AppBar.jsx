import React, { useState, useEffect } from "react";
import Logo from "./Logo";
import NavDesktop from "./NavDesktop/NavDesktop";
import NavMobile from "./NavMobile/NavMobile";
import isMobileScreen from "../../utils/isMobileScreen";
import { Container, Content } from "./AppBar.styles";

const AppBar = ({
  path,
  product_pages_nav,
  customers_page_nav,
  contact_page_nav,
  company_pages_nav,
  homepage_nav,
  get_a_demo_button,
  logo_text,
  logo_icon,
  product_pages_sub_items,
  company_pages_sub_items,
}) => {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    setScrolled(offset > 1);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });

  const isMobile = isMobileScreen();

  const productPages = product_pages_sub_items.map((subitem) => {
    const url = subitem.route.text;
    const title = subitem.text.text;
    return { url, title };
  });

  const CompanyPages = company_pages_sub_items.map((subitem) => {
    const url = subitem.route.text;
    const title = subitem.text.text;
    return { url, title };
  });

  const navProps = {
    getADemoBtnText: get_a_demo_button.text,
    productPagesNavText: product_pages_nav.text,
    customersPagesNavText: customers_page_nav.text,
    CompanyPagesNavText: company_pages_nav.text,
    contactPageNavText: contact_page_nav.text,
    homepageNavText: homepage_nav.text,
    productPages,
    CompanyPages,
    path,
  };

  return (
    <Container scrolled={scrolled}>
      <Content>
        <Logo logoIcon={logo_icon} logoText={logo_text} />
        {isMobile ? <NavMobile {...navProps} /> : <NavDesktop {...navProps} />}
      </Content>
    </Container>
  );
};

export default AppBar;
