import React from "react";
import styled from "styled-components";
import { Paragraph } from "./typography";
import { SCREEN_SIZES } from "./utils/constants";

const TrustedCustomersWrapper = styled.div`
  text-align: center;
`;

const Logos = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-top: 4.2rem;
  @media only screen and (max-width: ${SCREEN_SIZES.TABLET}px) {
    margin-top: 3.2rem;
  }
`;

const Logo = styled.img`
  height: fit-content;
  max-width: 13.6rem;
  max-height: 4.4rem;
  margin: 1.2rem;
`;

const TrustedCustomers = ({ headline, logos }) => (
  <TrustedCustomersWrapper>
    <Paragraph>{headline}</Paragraph>
    <Logos>
      {logos.map((logo) => (
        <Logo src={logo.logo.url} />
      ))}
    </Logos>
  </TrustedCustomersWrapper>
);

export default TrustedCustomers;
