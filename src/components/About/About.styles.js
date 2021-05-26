import styled from "styled-components";

import AboutHeroBackground from "../../../assets/aboutHeroBackground.svg";
import AboutContentBlob from "../../../assets/aboutContentBlob.svg";
import { SCREEN_SIZES } from "../utils/constants";

export const Wrapper = styled.div`
  position: relative;
  max-width: 144rem;
  margin: auto;
`;

export const HeroBackground = styled(AboutHeroBackground)`
  position: absolute;
  z-index: -1;
  left: 4rem;
`;

export const Hero = styled.header`
  display: flex;
  justify-content: center;
  flex-direction: column;

  min-height: 30rem;
  width: 73rem;

  margin: 0 auto 6rem auto;
  @media only screen and (max-width: 860px) {
    margin: 1rem 3.2rem 10rem 3.2rem;
    width: auto;
  }
`;

export const Content = styled.div`
  z-index: -1;
  margin-bottom: -64rem;
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
  margin-top: -37rem;
  margin-left: 72rem;
  margin-bottom: -18rem;
`;

export const Card = styled.div`
  width: 850px;
  top: -5rem;
  position: relative;

  border-radius: 16px;
  box-shadow: 0px 28px 92px rgba(32, 53, 70, 0.3);
  margin: auto;
  background: #ffffff;

  padding: 5.4rem 8.3rem 3.4rem 8.3rem;
  box-sizing: border-box;

  z-index: 1;

  @media only screen and (max-width: 960px) {
    width: 100%;
  }

  @media only screen and (max-width: ${SCREEN_SIZES.TABLET}px) {
    padding: 3.2rem;
  }
`;
