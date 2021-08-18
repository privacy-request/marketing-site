import { Container, Content } from "./AppBar.styles";
import React, { useEffect, useState } from "react";

import Logo from "./Logo";
import NavDesktop from "./NavDesktop/NavDesktop";
import NavMobile from "./NavMobile/NavMobile";
import { formatPages } from "../../utils/helpers";
import isMobileScreen from "../../utils/isMobileScreen";

const AppBar = ({ path, logo_text, logo_icon, body }) => {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    setScrolled(offset > 1);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isMobile = isMobileScreen();
  // const productPages = formatPages(product_pages_sub_items);
  // const companyPages = formatPages(company_pages_sub_items);

  const navProps = {
    // getADemoBtnText: get_a_demo_button.text,
    // productPagesNavText: product_pages_nav.text,
    // customersPagesNavText: customers_page_nav.text,
    // companyPagesNavText: company_pages_nav.text,
    // contactPageNavText: contact_page_nav.text,
    // homepageNavText: homepage_nav.text,
    // productPages,
    // companyPages,
    path,
  };

  return (
    <Container scrolled={scrolled}>
      <Content>
        <Logo logoIcon={logo_icon} logoText={logo_text} />
        {isMobile ? <NavMobile items={body} /> : <NavDesktop items={body} />}
      </Content>
    </Container>
  );
};

export default AppBar;
