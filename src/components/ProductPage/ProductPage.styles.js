import styled from "styled-components";
import { SCREEN_SIZES } from "../utils/constants";
import ProductPageHeroBackground from "../../../assets/productPageHeroBackground.svg";

export const Wrapper = styled.main`
  max-width: ${({ theme }) => theme.width.productPage};
  margin: auto;
`;

export const HeroBackgroundImage = styled(ProductPageHeroBackground)`
  top: -145px;
  display: flex;
  position: absolute;
  width: 143.3rem;
  height: 509px;
  z-index: -1;
  opacity: 0.55;
`;

export const Hero = styled.header`
  z-index: 3;
  max-width: ${({ theme }) => theme.width.productPageHero};
  min-height: 23rem;
  margin: 3rem auto 7.4rem auto;
  text-align: center;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  align-items: center;
  position: relative;
  @media only screen and (max-width: ${SCREEN_SIZES.LAPTOP}px) {
    text-align: left;
    padding: 0 3rem;
    align-items: end;
    margin-top: 1rem;
    margin-bottom: 5rem;
  }
`;
