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

const OverflowWrapper = styled.main`
  overflow: hidden;
`;

const Layout = ({
  children,
  path,
  navigationBarData,
  footerData,
  cookieBannerData,
}) => {
  return (
    <ThemeProvider theme={theme}>
      <CookiesProvider>
        <Helmet>
          <link rel="stylesheet" type="text/css" href="/fonts.css" />
        </Helmet>
        <GlobalStyles />
        <CookieBanner {...cookieBannerData} />
        <AppBar path={path} {...navigationBarData} />
        <OverflowWrapper>{children}</OverflowWrapper>
        <Footer {...footerData} navData={navigationBarData} />
      </CookiesProvider>
    </ThemeProvider>
  );
};

export default Layout;
