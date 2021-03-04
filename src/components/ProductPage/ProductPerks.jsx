import React from "react";
import styled, { css } from "styled-components";
import isMobileScreen from "../utils/isMobileScreen";
import { SCREEN_SIZES } from "../utils/constants";
import {
  ProductPageHeadline,
  Subheader,
  Paragraph,
  CallToAction,
} from "../typography";
import Illustration from "../Illustration";
import Image from "../Image";

const blueTitle = css`
  h2 {
    color: ${({ theme }) => theme.colour.blue.dark};
  }
`;

const sectionStyles = [
  css`
    ${blueTitle}
    flex-direction: row-reverse;
  `,
  css`
    background: linear-gradient(182.92deg, #203546 24.49%, #2d485e 85.45%);
    color: ${({ theme }) => theme.colour.white};
  `,
  css`
    ${blueTitle}
    margin: 5rem 0;
    flex-direction: row-reverse;
  `,
  css`
    background: linear-gradient(183.3deg, #ffe01b 27.45%, #fff170 95.76%);
  `,
  css`
    ${blueTitle}
    flex-direction: row-reverse;
  `,
  css`
    background: linear-gradient(183.42deg, #6bcbff 28.43%, #8fd8ff 99.18%);
  `,
];

const TextContainer = styled.div`
  max-width: ${({ theme: { width } }) => width.sectionColum};
  z-index: 1;
  position: relative;
  padding: 8rem;
  @media only screen and (max-width: ${SCREEN_SIZES.LAPTOP}px) {
    flex-direction: column-reverse;
    padding: 0;
    margin-top: 4em;
  }
`;

const Wrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 16px;
  margin: 2.6rem 0;
  ${({ index }) => sectionStyles[index]}
  @media only screen and (max-width: ${SCREEN_SIZES.LAPTOP}px) {
    flex-direction: column-reverse;
    padding: 8rem;
  }
`;

const PerkIllustration = styled(Illustration)`
  margin: auto;
  @media only screen and (min-width: ${SCREEN_SIZES.LAPTOP}px) {
    position: absolute;
  }
`;

const ProductPerks = ({ perks }) => {
  const isMobile = isMobileScreen();

  return (
    <>
      {perks.map((perk, index) => {
        const { heading, paragraph, subheadline1, ...rest } = perk.primary;
        return (
          <Wrapper index={index} isMobile={isMobile}>
            <TextContainer>
              <ProductPageHeadline as="h2">{heading.text}</ProductPageHeadline>
              <Subheader>{subheadline1.text}</Subheader>
              <Paragraph>{paragraph.text}</Paragraph>
              <CallToAction to={"/calendar"}>Learn More</CallToAction>
            </TextContainer>
            <PerkIllustration {...rest} />
          </Wrapper>
        );
      })}
    </>
  );
};

export default ProductPerks;
