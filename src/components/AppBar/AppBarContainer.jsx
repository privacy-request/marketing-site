import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { SCREEN_SIZES } from "../utils/constants";

const Container = styled.div`
  height: ${({ theme: { height } }) => height.appBar.desktop};
  width: 100vw;
  display: flex;
  background: ${({ theme: { colour } }) => colour.white};
  z-index: 4;
  ${({ scrolled }) =>
    scrolled &&
    `
    position: sticky;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.07);
  `}
  top: 0;
  @media only screen and (max-width: ${SCREEN_SIZES.LAPTOP}px) {
    height: ${({ theme: { height } }) => height.appBar.mobile};
  }
`;

const Content = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: auto;
  max-width: ${({ theme: { width } }) => width.section};
  padding: 0 ${({ theme: { padding } }) => padding.site};
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
