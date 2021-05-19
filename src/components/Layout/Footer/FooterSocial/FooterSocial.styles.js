import styled from "styled-components";
import { SCREEN_SIZES } from "../../../utils/constants";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 5.6rem 0 6rem 0;
  @media only screen and (max-width: ${SCREEN_SIZES.TABLET}px) {
    margin-top: 3rem;
  }

  @media only screen and (max-width: ${SCREEN_SIZES.TABLET}px) {
    flex-direction: column-reverse;
    align-items: center;
    justify-content: center;
  }
`;

export const SocialMedia = styled.div`
  margin-right: 8rem;
  @media only screen and (max-width: ${SCREEN_SIZES.TABLET}px) {
    margin-right: 0;
    margin-bottom: 3rem;
  }
`;

export const SocialMediaLink = styled.a`
  margin-left: 1.4rem;
  @media only screen and (max-width: ${SCREEN_SIZES.TABLET}px) {
    margin: 0.6rem;
  }
`;
