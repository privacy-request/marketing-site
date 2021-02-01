import React, { useState, useEffect } from "react";

import styled from "styled-components";
import { SCREEN_SIZES } from "../utils/constants";

const Container = styled.div`
  height: ${({ theme }) => theme.dimensions.appBarHeight};
  width: 100vw;
  display: flex;
  background: ${({ theme }) => theme.colour.white};
  z-index: 1;
  ${({ scrolled }) =>
    scrolled &&
    `
    position: sticky;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.07);
  `}
  top: 0;
  @media only screen and (max-width: ${SCREEN_SIZES.LAPTOP}px) {
    height: ${({ theme }) => theme.dimensions.appBarHeightMobile};
  }
`;

const Content = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: auto;
  padding: 0 ${({ theme }) => theme.spacing.pageHorizontal};
  max-width: ${({ theme }) => theme.dimensions.siteMaxWidth};
`;

const AppBarContainer = ({ children }) => {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    setScrolled(offset > 1);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });
  return (
    <Container scrolled={scrolled}>
      <Content>{children}</Content>
    </Container>
  );
};

export default AppBarContainer;
