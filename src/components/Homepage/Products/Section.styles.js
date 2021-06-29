import styled, { css } from "styled-components";
import { SCREEN_SIZES } from "../../utils/constants";

export const sectionStyles = [
  css`
    height: 80rem;
    h2 {
      color: ${({ theme }) => theme.colour.blue.dark};
    }
    transition: background-color 0.7s ease;
    background: ${({ inViewport }) => (inViewport ? "#f7fcff" : "white")};
    z-index: 1;
    mix-blend-mode: multiply;
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
    -webkit-clip-path: polygon(0 0, 100% 16rem, 100% 100%, 0 100%);
    @media only screen and (max-width: ${SCREEN_SIZES.LAPTOP}px) {
      margin-top: 2.2.rem;
      -webkit-clip-path: polygon(0 0, 100% 5%, 100% 100%, 0 100%);
    }
  `,
  css`
    transition: background-color 1s ease;
    background: ${({ inViewport, theme }) =>
      inViewport ? theme.colour.yellow : "#f7fcff"};
  `,
  css`
    transition: all 1s ease;
    background: ${({ theme, inViewport }) =>
      inViewport ? theme.colour.grey.dark : theme.colour.yellow};
    color: ${({ theme, inViewport }) =>
      inViewport ? theme.colour.white : theme.colour.grey.dark};
  `,
  css`
    transition: all 1s ease;
    height: 82rem;
    h2 {
      color: ${({ theme, inViewport }) =>
        inViewport ? theme.colour.blue.dark : theme.colour.white};
    }
    background: ${({ theme, inViewport }) =>
      inViewport
        ? theme.colour.gradient.background.light
        : theme.colour.grey.dark};
  `,
];

export const Section = styled.section`
  height: 67.5rem;
  margin: auto;
  position: relative;
  overflow: hidden;
  padding: 0 ${({ theme: { padding } }) => padding.site};
  ${({ index }) => sectionStyles[index]}
  @media only screen and (max-width: ${SCREEN_SIZES.LAPTOP}px) {
    height: fit-content;
    padding: 3rem;
  }
`;

export const SiteWrapper = styled.div`
  height: 100%;
  max-width: ${({ theme: { width } }) => width.site};
  margin: auto;
  z-index: 1;
`;

export const Wrapper = styled.div`
  height: 100%;
  max-width: ${({ theme: { width } }) => width.section};
  margin-left: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media only screen and (max-width: ${SCREEN_SIZES.LAPTOP}px) {
    flex-direction: column-reverse;
  }
`;
