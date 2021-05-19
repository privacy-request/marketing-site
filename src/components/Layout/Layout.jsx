import React from "react";
import GlobalStyles from "../utils/globalStyles";
import styled from "styled-components";
import AppBar from "./AppBar/AppBar";
import { ThemeProvider } from "styled-components";
import theme from "../utils/theme";
import Footer from "./Footer/Footer";
import CookieBanner from "../CookieBanner/CookieBanner";
import { CookiesProvider } from "react-cookie";

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
  const { homepage_nav, product_pages_nav, product_pages_sub_items } =
    navigationBarData;
  return (
    <ThemeProvider theme={theme}>
      <CookiesProvider>
        <GlobalStyles />
        <CookieBanner {...cookieBannerData} />
        <AppBar path={path} {...navigationBarData} />
        <OverflowWrapper>{children}</OverflowWrapper>
        <Footer
          {...footerData}
          {...{ homepage_nav, product_pages_nav, product_pages_sub_items }}
        />
      </CookiesProvider>
    </ThemeProvider>
  );
};

export default Layout;
