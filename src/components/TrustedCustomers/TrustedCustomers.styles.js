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
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Logos = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  min-width: 378px;
  @media only screen and (max-width: ${SCREEN_SIZES.LAPTOP}px) {
    flex-wrap: wrap;
    width: 400px;
  }
`;

export const LogoContainer = styled.div`
  width: 20rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Logo = styled.img`
  height: 2.5rem;
  margin: 1.2rem 2.6rem;
  max-width: 20rem;
  @media only screen and (max-width: ${SCREEN_SIZES.MOBILE_LARGE}px) {
    height: 22px;
  }
  margin-bottom: 1.6rem;
`;
