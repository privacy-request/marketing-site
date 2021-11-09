import styled from "styled-components";
import { SCREEN_SIZES } from "../../components/utils/constants";

export const Card = styled.div`
  max-width: 68.7rem;
  display: flex;
  justify-content: center;
  width: 100%;
  position: relative;
  height: 100%;
  border-radius: 16px;
  box-shadow: 0px 28px 92px rgba(32, 53, 70, 0.3);
  margin: auto;
  background: #ffffff;
  box-sizing: border-box;
  z-index: 2;
  @media only screen and (max-width: ${SCREEN_SIZES.LAPTOP}px) {
    margin-bottom: 4rem;
  }
`;

export const Content = styled.div`
  position: relative;
  width: 100%;
  padding: 0 3rem;
  display: flex;
  justify-content: center;
  margin-bottom: 10rem;
  padding: 8rem 0rem 3rem 0rem;
  @media only screen and (max-width: ${SCREEN_SIZES.LAPTOP}px) {
    padding-top: 6rem;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin-bottom: 5rem;
  }
`;

export const Left = styled.div`
  position: relative;
  margin-right: 5rem;
  margin-top: 7rem;
  padding-left: 3rem;
  margin-bottom: 5rem;
  @media only screen and (max-width: ${SCREEN_SIZES.LAPTOP}px) {
    margin-right: 0;
    margin-bottom: 0;
  }
`;

export const Right = styled.div`
  max-width: 68.7rem;
  height: 100%;
  padding: 0 3rem;
`;
