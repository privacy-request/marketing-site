import React from "react";
import GlobalStyles from "./utils/globalStyles";
import styled from "styled-components";
import AppBar from "./AppBar/AppBar";
import { ThemeProvider } from "styled-components";
import theme from "./utils/theme";
import Footer from "./Footer/Footer";

const OverflowWrapper = styled.main`
  overflow: hidden;
`;

const Layout = ({ children, path }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <AppBar path={path} />
      <OverflowWrapper>{children}</OverflowWrapper>
      <Footer />
    </ThemeProvider>
  );
};

export default Layout;
