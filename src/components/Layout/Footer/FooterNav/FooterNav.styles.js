import styled, { css } from "styled-components";
import { DesktopNavItem } from "../../../typography";
import { SCREEN_SIZES } from "../../../utils/constants";

export const NavList = styled.ul`
  display: flex;
  justify-content: flex-start;
  max-width: 100rem;
  box-sizing: border-box;
  @media only screen and (max-width: ${SCREEN_SIZES.TABLET}px) {
    justify-content: center;
    flex-direction: column;
    margin-top: -3rem;
  }
`;

export const NavItemStyles = css`
  margin-right: 3.6rem;
  min-width: 15.6rem;
  @media only screen and (max-width: ${SCREEN_SIZES.TABLET}px) {
    min-width: 50%;
    margin-right: 0rem;
    margin-top: 2.2rem;
    text-align: center;
  }
`;

export const NavSubList = styled.ul`
  ${NavItemStyles}
`;

export const NavItem = styled(DesktopNavItem)`
  ${NavItemStyles}
`;
