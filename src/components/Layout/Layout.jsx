import React from "react";
import GlobalStyles from "../utils/globalStyles";
import styled from "styled-components";
import AppBar from "./AppBar/AppBar";
import { ThemeProvider } from "styled-components";
import theme from "../utils/theme";
import Footer from "./Footer/Footer";
import CookieBanner from "../CookieBanner/CookieBanner";
import { CookiesProvider } from "react-cookie";
import { Helmet } from "react-helmet";
import "./font.css";

const OverflowWrapper = styled.main`
  overflow: hidden;
`;

const Layout = ({
  children,
  path,
  navigationData,
  footerData,
  cookieBannerData,
  hideNavBar,
}) => {
  return (
    <ThemeProvider theme={theme}>
      <CookiesProvider>
        <Helmet>
          <link rel="stylesheet" type="text/css" href="/fonts.css" />
          <script
            defer
            data-domain="opsware.co"
            src="https://plausible.io/js/plausible.js"
          ></script>
        </Helmet>
        <GlobalStyles />
        <CookieBanner {...cookieBannerData} />
        <AppBar path={path} {...navigationData} hideNavBar={hideNavBar} />
        <OverflowWrapper>{children}</OverflowWrapper>
        <Footer {...footerData} navItems={navigationData.body} />
      </CookiesProvider>
    </ThemeProvider>
  );
};

export default Layout;
