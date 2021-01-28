import React from "react";
import GlobalStyles from "./utils/globalStyles";
import AppBar from "./AppBar/AppBar";
import { ThemeProvider } from "styled-components";
import theme from "./utils/theme";

const Layout = ({ children, path }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <AppBar path={path} />
      {children}
    </ThemeProvider>
  );
};

export default Layout;
