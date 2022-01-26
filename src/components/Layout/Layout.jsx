import React, { useState } from "react";
import GlobalStyles from "../utils/globalStyles";
import styled from "styled-components";
import AppBar from "./AppBar/AppBar";
import { ThemeProvider } from "styled-components";
import theme from "../utils/theme";
import Footer from "./Footer/Footer";
import { Helmet } from "react-helmet";
import "./font.css";
import NotificationBar from "./NotificationBar/NotificationBar";
import { Transition } from "react-transition-group";

const UpOnExit = styled.div`
  transition: 0.5s;
  margin-top: ${({ state }) => (state === "exited" ? "-4.6rem" : "0rem")};
`;

const OverflowWrapper = styled.main`
  overflow: hidden;
`;

const Layout = ({
  children,
  path,
  navigationData,
  footerData,
  hideNavBar,
  notificationBarRichText,
}) => {
  const [displayNotification, setDisplayNotification] = useState(
    !!notificationBarRichText[0]?.text
  );
  return (
    <ThemeProvider theme={theme}>
      <Helmet>
        <link rel="stylesheet" type="text/css" href="/fonts.css" />
        <script
          defer
          data-domain="opsware.co"
          src="https://plausible.io/js/plausible.js"
        ></script>
      </Helmet>
      <GlobalStyles />
      <Transition in={displayNotification}>
        {(state) => (
          <UpOnExit state={state}>
            <NotificationBar
              {...{
                notificationBarRichText,
                displayNotification,
                setDisplayNotification,
              }}
            />
          </UpOnExit>
        )}
      </Transition>
      <AppBar path={path} {...navigationData} hideNavBar={hideNavBar} />
      <OverflowWrapper>{children}</OverflowWrapper>
      <Footer {...footerData} navItems={navigationData.body} />
    </ThemeProvider>
  );
};

export default Layout;
