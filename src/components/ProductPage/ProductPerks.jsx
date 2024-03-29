import { SCREEN_SIZES, STATIC_ROUTES } from "../utils/constants";
import { graphql, useStaticQuery } from "gatsby";
import styled, { css } from "styled-components";

import AlternatingIllustration from "../Illustration/AlternatingIllustration";
import Illustration from "../Illustration/Illustration";
import LayeredIllustration from "../Illustration/LayeredIllustrationSlice";
import React from "react";
import SectionText from "../SectionText";

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
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 16px;
  position: relative;
  @media only screen and (min-width: ${SCREEN_SIZES.LAPTOP}px) {
    div:nth-child(odd) {
      padding: 8rem 3rem 8rem 8rem;
    }
    div:nth-child(even) {
      padding: 8rem 8rem 8rem 0;
    }
  }
  ${({ index }) => sectionStyles[index]}
  @media only screen and (max-width: ${SCREEN_SIZES.LAPTOP}px) {
    flex-direction: column-reverse;
    padding: 3rem;
    margin: 0;
    border-radius: 0;
  }
`;

const PerkText = styled(SectionText)`
  @media only screen and (max-width: ${SCREEN_SIZES.LAPTOP}px) {
    padding: 0rem;
    margin-bottom: 2.6rem;
  }
`;

const ProductPerks = ({ perks }) => {
  const data = useStaticQuery(query);
  const { text } = data.allPrismicDemoCta.edges[0].node.data;

  return (
    <>
      {perks.map((perk, index) => {
        return (
          <Wrapper index={index} key={`product-perk-${index}`}>
            <PerkText
              {...perk.primary}
              callToActionText={text.text}
              size="medium"
              route={STATIC_ROUTES.CALENDAR}
            />
            {perk.slice_type === "text_with_alternating_illustration" ? (
              <AlternatingIllustration
                scaleImage
                {...perk.primary}
                illustrations={perk.items}
              />
            ) : perk.slice_type === "text_with_layered_illustration" ? (
              <LayeredIllustration scaleImage {...perk.primary} />
            ) : (
              <Illustration scaleImage {...perk.primary} />
            )}
          </Wrapper>
        );
      })}
    </>
  );
};

const query = graphql`
  query ProductPerks {
    allPrismicDemoCta {
      edges {
        node {
          data {
            text {
              text
            }
          }
        }
      }
    }
  }
`;

export default ProductPerks;
