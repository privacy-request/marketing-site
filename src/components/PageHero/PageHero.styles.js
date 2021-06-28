import styled from "styled-components";
import AboutHeroBackground from "../../../assets/aboutHeroBackground.svg";

export const HeroBackground = styled(AboutHeroBackground)`
  position: absolute;
  z-index: -1;
  left: -31rem;
`;

export const Hero = styled.header`
  display: flex;
  justify-content: center;
  flex-direction: column;
  position: relative;

  min-height: 30rem;
  width: 73rem;

  margin: 0 auto 6rem auto;
  @media only screen and (max-width: 860px) {
    margin: 1rem 3.2rem 10rem 3.2rem;
    width: auto;
  }
  
`;
