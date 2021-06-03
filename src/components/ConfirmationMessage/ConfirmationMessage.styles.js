import styled from "styled-components";
import ProductPageHeroBackground from "../../../assets/productPageHeroBackground.svg";
import { SCREEN_SIZES } from "../utils/constants";

export const HeroBackgroundImage = styled(ProductPageHeroBackground)`
  top: -145px;
  display: flex;
  position: absolute;
  width: 100vw;
  height: 509px;
  z-index: -1;
  opacity: 0.55;
`;
export const Hero = styled.header`
  max-width: ${({ theme }) => theme.width.productPageHero};
  margin: 4.5rem auto 20rem auto;
  text-align: center;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  align-items: center;
  position: relative;
  height: 21rem;
  @media only screen and (max-width: ${SCREEN_SIZES.LAPTOP}px) {
    padding: 0 3rem;
    margin-top: 4rem;
    margin-bottom: 5rem;
  }
`;

export const Emoji = styled.span`
  font-size: 7rem;
  margin-bottom: 0.5rem;
  width: 100%;
`;
