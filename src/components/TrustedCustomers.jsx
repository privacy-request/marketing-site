import React from "react";
import styled from "styled-components";
import { Paragraph } from "./typography";
import { SCREEN_SIZES } from "./utils/constants";

const TrustedCustomersWrapper = styled.section`
  @media only screen and (max-width: ${SCREEN_SIZES.TABLET}px) {
    text-align: center;
  }
  max-width: ${({ theme: { width } }) => width.section};
  margin-left: auto;
  margin-bottom: 6.2rem;
`;

const Logos = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-top: ${({ theme: { margin } }) => margin.customerLogos.desktop};
  @media only screen and (max-width: ${SCREEN_SIZES.TABLET}px) {
    margin-top: ${({ theme: { margin } }) => margin.customerLogos.mobile};
  }
`;

const Logo = styled.img`
  height: fit-content;
  max-width: 13.6rem;
  max-height: 4.4rem;
  margin: 1.2rem;
`;

const CustomersHeadline = styled(Paragraph)`
  margin-left: ${({ theme: { margin } }) => margin.homepageSections};
`;

const TrustedCustomers = ({ headline, logos }) => (
  <TrustedCustomersWrapper>
    <CustomersHeadline>{headline}</CustomersHeadline>
    <Logos>
      {logos.map((logo) => (
        <Logo key={`logo-${logo.logo.url}`} src={logo.logo.url} />
      ))}
    </Logos>
  </TrustedCustomersWrapper>
);

export default TrustedCustomers;
