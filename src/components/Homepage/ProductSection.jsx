import React from "react";
import styled, { css } from "styled-components";
import TextWithIllustration from "../TextWithIllustration";
import { SCREEN_SIZES } from "../utils/constants";

const sectionStyles = [
  css`
    height: 78rem;
    h2 {
      color: ${({ theme }) => theme.colour.blue.dark};
    }
    background: #f7fcff;
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
    -webkit-clip-path: polygon(0 0, 100% 16rem, 100% 100%, 0 100%);
    @media only screen and (max-width: ${SCREEN_SIZES.LAPTOP}px) {
      margin-top: 2.2.rem;
      -webkit-clip-path: polygon(0 0, 100% 5%, 100% 100%, 0 100%);
    }
  `,
  css`
    background: ${({ theme }) => theme.colour.yellow};
  `,
  css`
    background: ${({ theme }) => theme.colour.grey.dark};
    color: ${({ theme }) => theme.colour.white};
  `,
  css`
    height: 82rem;
    h2 {
      color: ${({ theme }) => theme.colour.blue.dark};
    }
    background: ${({ theme }) => theme.colour.gradient.background.light};
  `,
];

const Section = styled.section`
  height: 67.5rem;
  max-width: ${({ theme: { width } }) => width.site};
  margin: auto;
  position: relative;
  overflow: hidden;
  padding: 0 ${({ theme: { padding } }) => padding.site};
  ${({ index }) => sectionStyles[index]}
  @media only screen and (max-width: ${SCREEN_SIZES.LAPTOP}px) {
    height: fit-content;
  }
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  max-width: ${({ theme: { width } }) => width.section};
  margin-left: auto;
  z-index: 10;

  @media only screen and (max-width: ${SCREEN_SIZES.LAPTOP}px) {
    flex-direction: column-reverse;
  }
`;

const Product = ({ index, section }) => {
  return (
    <Section index={index}>
      <Wrapper>
        <TextWithIllustration {...section.primary} />
      </Wrapper>
    </Section>
  );
};
export default Product;
