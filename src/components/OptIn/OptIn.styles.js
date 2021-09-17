import styled from "styled-components";
import AboutContentEllipse from "../../../assets/aboutContentEllipse.svg";
import OptInLeftBlob from "../../../assets/optInLeftBlob.svg";
import OptInRightBlob from "../../../assets/optInRightBlob.svg";
import OptInHero from "../../../assets/optInHero.svg";

export const Wrapper = styled.div`
  background: linear-gradient(
    92.13deg,
    #009dff 3.73%,
    #6bcbff 60.51%,
    #8fd8ff 86.59%
  );
  height: 80rem;
  position: relative;

  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Ellipse = styled(AboutContentEllipse)`
  position: absolute;
  top: 68rem;
  @media only screen and (min-width: 1441px) {
    transform: scale(1.6);
    top: 78rem;
  }
  @media only screen and (min-width: 2440px) {
    transform: scale(2.2);
  }
`;

export const Content = styled.div`
  display: flex;
`;

export const Left = styled.div`
  position: relative;
  width: 51.3rem;
`;

export const Right = styled.div`
  width: 68.7rem;
`;

export const LeftBlob = styled(OptInLeftBlob)`
  position: absolute;
  left: 0;
  top: 20rem;
`;

export const RightBlob = styled(OptInRightBlob)`
  position: absolute;
  right: 0;
  bottom: 0;
`;

export const HeroBlocks = styled(OptInHero)`
  opacity: 0.25;
  position: absolute;
  left: 5rem;
  top: 1.6rem;
`;
