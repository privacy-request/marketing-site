import styled from "styled-components";
import AboutContentEllipse from "../../../assets/aboutContentEllipse.svg";
import OptInLeftBlob from "../../../assets/optInLeftBlob.svg";
import OptInRightBlob from "../../../assets/optInRightBlob.svg";
import OptInHero from "../../../assets/optInHero.svg";
import { SCREEN_SIZES } from "../utils/constants";

export const Wrapper = styled.div`
  height: 80rem;
  position: relative;

  display: flex;
  align-items: center;
  flex-direction: column;
  height: 100%;
  @media only screen and (max-width: ${SCREEN_SIZES.LAPTOP}px) {
    margin-bottom: 8rem;
  }
`;

export const Ellipse = styled(AboutContentEllipse)`
  position: absolute;
  bottom: -62rem;
  @media only screen and (max-width: ${SCREEN_SIZES.LAPTOP}px) {
    top: 167rem;
  }
  @media only screen and (min-width: 1441px) {
    transform: scale(1.6);
    top: 92rem;
  }
  @media only screen and (min-width: 2440px) {
    transform: scale(2.2);
    top: 112rem;
  }
`;

export const Content = styled.div`
  position: relative;
  background: linear-gradient(
    92.13deg,
    #009dff 3.73%,
    #6bcbff 60.51%,
    #8fd8ff 86.59%
  );
  width: 100%;
  padding: 0 3rem;
  display: flex;
  justify-content: center;
  margin-bottom: 10rem;
  padding: 8rem 0rem 3rem 0rem;
  @media only screen and (max-width: ${SCREEN_SIZES.LAPTOP}px) {
    padding-top: 0rem;
    padding-bottom: 0rem;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin-bottom: 4rem;
  }
`;

export const Left = styled.div`
  position: relative;
  max-width: 51.3rem;
  margin-right: 3rem;
  margin-top: 4rem;
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

export const LeftBlob = styled(OptInLeftBlob)`
  position: absolute;
  left: 0;
  top: 25rem;
`;

export const RightBlob = styled(OptInRightBlob)`
  position: absolute;
  right: 0;
  bottom: 0;
`;

export const HeroBlocks = styled(OptInHero)`
  opacity: 0.25;
  position: absolute;
  left: -4rem;
  top: -10.4rem;
`;

export const Card = styled.div`
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
export const AdditionalContent = styled.div`
  z-index: 1;
  max-width: 85rem;
  background-color: white;
  padding: 0 3rem;
  margin-top: -3rem;
  margin-bottom: 8rem;
  @media only screen and (max-width: ${SCREEN_SIZES.LAPTOP}px) {
    margin-bottom: 0rem;
  }
`;
