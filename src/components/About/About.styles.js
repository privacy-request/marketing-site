import styled from "styled-components";
import AboutContentEllipse from "../../../assets/aboutContentEllipse.svg";
import AboutContentBlob from "../../../assets/aboutContentBlob.svg";
import { SCREEN_SIZES } from "../utils/constants";

export const Wrapper = styled.div`
  position: relative;
  margin: auto;
`;

export const Ellipse = styled(AboutContentEllipse)`
  position: absolute;
  top: 38rem;
  @media only screen and (min-width: 1440px) {
      width: 100%;
      transform: scale(1.6);
      top: 60rem;
  }
  @media only screen and (min-width: 3500px) {
    transform: scale(2.5);
    top: 90rem;
  }
  @media only screen and (max-width: 500px) {
    top: 50rem;
  }
`
; 

export const Content = styled.div`
  z-index: -1;
  display: flex;
  align-items: center;
  flex-direction: column;

  position: relative;
  padding: 0 3rem;

  transform-origin: center;
  margin-top: 5rem;
  min-height: 70rem;
  background: linear-gradient(
    92.13deg,
    #009dff 3.73%,
    #6bcbff 60.51%,
    #8fd8ff 86.59%
  );
  @media only screen and (max-width: 600px) {
    background-size: cover;
  }
`;

export const Blob = styled(AboutContentBlob)`
  margin-top: -90rem;
  margin-left: 72rem;
  margin-bottom: 10rem;
`;

export const Card = styled.div`
  width: 850px;
  top: -36rem;
  position: relative;

  border-radius: 16px;
  box-shadow: 0px 28px 92px rgba(32, 53, 70, 0.3);
  margin: auto;
  background: #ffffff;

  padding: 5.4rem 8.3rem 3.4rem 8.3rem;
  box-sizing: border-box;

  z-index: 1;
  @media only screen and (max-width: ${SCREEN_SIZES.LAPTOP}px) {
    top: -27rem;
  }
  @media only screen and (max-width: 960px) {
    width: 100%;
  }

  @media only screen and (max-width: ${SCREEN_SIZES.TABLET}px) {
    padding: 3.2rem;
  }
  @media only screen and (max-width: 530px) {
    top: -20rem;
  }
  @media only screen and (max-width: 430px) {
    top: -15rem;
  }
`;
