import styled from "styled-components";
import ContactContentEllipse from "../../../assets/contactPageEllipse.svg";
import AboutContentBlob from "../../../assets/aboutContentBlob.svg";
import { HeroBackground, Hero } from "../PageHero/PageHero.styles.js";
import { HyperLink } from "../typography";

export const ContactHeroBackground = styled(HeroBackground)`
    left: -31rem;
`;

export const Ellipse = styled(ContactContentEllipse)`
  margin-top: -10rem;
  @media only screen and (max-width: 400px) {
    margin-top: 0;
  }
  @media only screen and (min-width: 1440px) {
    width: 100vw;
    transform: scale(1.6);
    margin-top: -20rem;
  }
  @media only screen and (min-width: 2440px) {
    transform: scale(2.2);
  }
`;

export const Blob = styled(AboutContentBlob)`
  margin-top: -37rem;
  margin-left: 72rem;
  margin-bottom: -18rem;
`;

export const Wrapper = styled.div`
  position: relative;
  margin: auto;

`;

export const ContactHero = styled(Hero)`
  position: absolute;
  z-index: 2;
  left: 0;
  right: 0;
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
  margin-bottom: 9rem;
`;

export const Card = styled.div`
  width: 850px;
  position: relative;

  border-radius: 16px;
  box-shadow: 0px 28px 92px rgba(32, 53, 70, 0.3);
  margin: auto;
  background: #ffffff;

  box-sizing: border-box;

  z-index: 1;

  @media only screen and (max-width: 960px) {
    width: 100%;
  }
`;

export const ContactFormCard = styled(Card)`
  margin-top: -32rem;
  margin-bottom: 3rem;
  padding: 6.2rem 8.3rem 9rem 8.3rem;
  @media only screen and (max-width: 575px) {
    margin-top: -30rem;
    padding: 5.4rem 4.3rem 3.4rem 4.3rem;
  }

  @media only screen and (max-width: 500px) {
    margin-top: -26rem;
    padding: 3rem 2.3rem 3rem 2.3rem;
  }

  @media only screen and (min-width: 1440px) {
    margin-top: -22rem;
  }
`;

export const SalesCard = styled(Card)`
  margin-bottom: 6.4rem;
  text-align: center;
  padding: 4.8rem 12rem 5.6rem 12rem;
  @media only screen and (max-width: 575px) {
    padding: 4.8rem 3.5rem 5.1rem 3.5rem;
  }
`;

export const Email = styled(HyperLink)`
  margin: 0 0.6rem;
`;

export const Phone = styled(HyperLink)`
  margin-left: 0.6rem;
`;
