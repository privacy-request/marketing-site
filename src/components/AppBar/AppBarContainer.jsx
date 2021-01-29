import React, { useState, useEffect } from "react";

import styled from "styled-components";
import { SCREEN_SIZES } from "../utils/constants";

const Container = styled.div`
  height: ${({ theme }) => theme.dimensions.app_bar_height};
  width: 100vw;
  display: flex;

  ${({ scrolled }) =>
    scrolled &&
    `
    position: sticky;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.07);
  `}
  top: 0;
  @media only screen and (max-width: ${SCREEN_SIZES.TABLET}px) {
    height: ${({ theme }) => theme.dimensions.app_bar_height_mobile};
  }
`;

const Content = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: auto;
  padding: 0 ${({ theme }) => theme.spacing.page_horizontal};
  max-width: ${({ theme }) => theme.dimensions.site_max_width};
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
