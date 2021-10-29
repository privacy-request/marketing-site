import { Container, Content } from "./AppBar.styles";
import React, { useEffect, useState } from "react";

import Logo from "./Logo";
import NavDesktop from "./NavDesktop/NavDesktop";
import NavMobile from "./NavMobile/NavMobile";
import isMobileScreen from "../../utils/isMobileScreen";

const AppBar = ({ logo_text, logo_icon, body, hideNavBar }) => {
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

  return (
    <Container scrolled={scrolled}>
      <Content>
        <Logo logoIcon={logo_icon} logoText={logo_text} />
        {!hideNavBar &&
          (isMobile ? <NavMobile items={body} /> : <NavDesktop items={body} />)}
      </Content>
    </Container>
  );
};

export default AppBar;
