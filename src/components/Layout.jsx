import React from "react";
import GlobalStyles from "./utils/globalStyles";
import styled from "styled-components";
import AppBar from "./AppBar/AppBar";
import { ThemeProvider } from "styled-components";
import theme from "./utils/theme";

const OverflowWrapper = styled.main`
  overflow: hidden;
`;

const Layout = ({ children, path }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <AppBar path={path} />
      <OverflowWrapper>{children}</OverflowWrapper>
    </ThemeProvider>
  );
};

export default Layout;
