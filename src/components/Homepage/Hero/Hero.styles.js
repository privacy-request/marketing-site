import styled from "styled-components";
import { SCREEN_SIZES } from "../../utils/constants";

export const HeroContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: ${({ theme: { margin } }) => margin.homepageHero.desktop};
  max-width: ${({ theme: { width } }) => width.section};
  margin-left: auto;
  @media only screen and (max-width: ${SCREEN_SIZES.TABLET}px) {
    margin: ${({ theme: { margin } }) => margin.homepageHero.mobile};
  }
`;

export const Header = styled.header`
  margin-top: ${({ theme: { margin } }) => margin.homepageHeader};
  margin-left: ${({ theme: { margin } }) => margin.homepageSections};
  max-width: ${({ theme }) => theme.width.sectionColum};
  @media only screen and (max-width: ${SCREEN_SIZES.TABLET}px) {
    margin-top: 0;
  }
`;
