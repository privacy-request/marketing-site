import React from "react";
import GlobalStyles from "./utils/globalStyles";
import styled from "styled-components";
import AppBar from "./AppBar/AppBar";
import { ThemeProvider } from "styled-components";
import theme from "./utils/theme";

const PageContainer = styled.main`
  padding: 0 ${({ theme }) => theme.spacing.pageHorizontal};
  max-width: ${({ theme }) => theme.dimensions.siteMaxWidth};
  margin: auto;
`;

const Layout = ({ children, path }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <AppBar path={path} />
      <PageContainer> {children}</PageContainer>
    </ThemeProvider>
  );
};

export default Layout;
