import styled from "styled-components";
import LeftArrow from "../../../../assets/leftArrow.svg";
import RightArrow from "../../../../assets/rightArrow.svg";
import { SCREEN_SIZES } from "../../utils/constants";

export const Wrapper = styled.div`
  margin-bottom: 12rem;
  @media only screen and (max-width: ${SCREEN_SIZES.TABLET}px) {
    margin: 3rem 3rem 12rem 3rem;
  }
`;
export const ArrowBtnAndValue = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  min-height: 16.5rem;
  margin-bottom: 3rem;
  @media only screen and (max-width: ${SCREEN_SIZES.MOBILE_LARGE}px) {
    min-height: 27.5rem;
  }
`;

export const LeftArrowBtn = styled(LeftArrow)`
  cursor: pointer;
  margin-right: 3rem;
  margin-top: 8rem;
`;

export const RightArrowBtn = styled(RightArrow)`
  cursor: pointer;
  margin-left: 3rem;
  margin-top: 8rem;
`;

export const Filler = styled.div`
  width: 9.7rem;
  height: 3rem;
  @media only screen and (max-width: ${SCREEN_SIZES.LAPTOP}px) {
    width: 3rem;
  }
`;
