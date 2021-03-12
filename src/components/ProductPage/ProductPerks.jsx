import React from "react";
import styled, { css } from "styled-components";
import { SCREEN_SIZES } from "../utils/constants";
import SectionText from "../SectionText";
import Illustration from "../Illustration";

const blueTitle = css`
  h2 {
    color: ${({ theme }) => theme.colour.blue.dark};
  }
`;

const sectionStyles = [
  css`
    ${blueTitle}
    flex-direction: row-reverse;
    padding-left: 0rem;
  `,
  css`
    background: linear-gradient(182.92deg, #203546 24.49%, #2d485e 85.45%);
    color: ${({ theme }) => theme.colour.white};
    padding-right: 0rem;
  `,
  css`
    ${blueTitle}
    flex-direction: row-reverse;
    padding-left: 0rem;
  `,
  css`
    padding-right: 0rem;
    background: linear-gradient(183.3deg, #ffe01b 27.45%, #fff170 95.76%);
  `,
  css`
    ${blueTitle}
    flex-direction: row-reverse;
    padding-left: 0rem;
  `,
  css`
    padding-right: 0rem;
    background: linear-gradient(183.42deg, #6bcbff 28.43%, #8fd8ff 99.18%);
  `,
];

const Wrapper = styled.section`
  padding: 8rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 16px;

  ${({ index }) => sectionStyles[index]}
  @media only screen and (max-width: ${SCREEN_SIZES.LAPTOP}px) {
    flex-direction: column-reverse;
    padding: 3rem;
    margin: 0;
    border-radius: 0;
  }
`;

const PerkText = styled(SectionText)`
  /* padding: 7rem; */
  @media only screen and (max-width: ${SCREEN_SIZES.LAPTOP}px) {
    padding: 0rem;
    margin-bottom: 2.6rem;
  }
`;

const ProductPerks = ({ perks }) => {
  return (
    <>
      {perks.map((perk, index) => {
        return (
          <Wrapper index={index}>
            <PerkText
              {...perk.primary}
              callToActionText="Book a demo"
              size="medium"
            />
            <Illustration {...perk.primary} />
          </Wrapper>
        );
      })}
    </>
  );
};

export default ProductPerks;
