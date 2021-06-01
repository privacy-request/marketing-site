import styled from "styled-components";
import ContactContentEllipse from "../../../assets/contactPageEllipse.svg";
import { HeroBackground, Hero } from "../PageHero/PageHero.styles.js";

export const ContactHeroBackground = styled(HeroBackground)`
  left: 5rem;
  top: -1.6rem;
  z-index: 1;
`;

export const Ellipse = styled(ContactContentEllipse)`
  margin-top: -10rem;
  @media only screen and (max-width: 410px) {
    margin-top: 0;
  }
`;

export const ContactHero = styled(Hero)`
  position: absolute;
  z-index: 2;
  left: 0;
  right: 0;
  @media only screen and (max-width: 860px) {
    top: -2rem;
  }
  @media only screen and (max-width: 560px) {
    top: 0rem;
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  min-height: 500px;
  position: relative;
  padding: 0 3rem;

  transform-origin: center;
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

export const Card = styled.div`
  width: 850px;
  position: relative;

  border-radius: 16px;
  box-shadow: 0px 28px 92px rgba(32, 53, 70, 0.3);
  margin: auto;
  background: #ffffff;
  padding: 5.4rem 8.3rem 3.4rem 8.3rem;
  box-sizing: border-box;
  margin-top: -32rem;
  z-index: 10;

  @media only screen and (max-width: 960px) {
    width: 100%;
  }

  @media only screen and (max-width: 575px) {
    margin-top: -30rem;
  }

  @media only screen and (max-width: 500px) {
    margin-top: -26 rem;
  }
`;
