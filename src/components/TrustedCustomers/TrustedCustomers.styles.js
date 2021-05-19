import styled from "styled-components";
import { SCREEN_SIZES } from "../utils/constants";

export const TrustedCustomersWrapper = styled.section`
  text-align: ${({ centerText }) => (centerText ? "center" : "left")};
  @media only screen and (max-width: ${SCREEN_SIZES.TABLET}px) {
    text-align: center;
  }
  max-width: ${({ theme: { width } }) => width.section};
  margin-left: auto;
  margin-bottom: 2.6rem;
`;

export const Logos = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: ${({ theme: { margin } }) => margin.customerLogos.desktop};
  @media only screen and (max-width: ${SCREEN_SIZES.TABLET}px) {
    margin-top: ${({ theme: { margin } }) => margin.customerLogos.mobile};
  }
`;

export const Logo = styled.img`
  height: fit-content;
  max-width: 13.6rem;
  max-height: 4.4rem;
  margin: 1.2rem 2.6rem;
`;
