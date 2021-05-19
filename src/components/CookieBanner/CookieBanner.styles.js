import styled from "styled-components";
import { CookieBannerText } from "../typography";
import Close from "../../../assets/close.svg";
import Expand from "../../../assets/expand.svg";
import { SCREEN_SIZES } from "../utils/constants";

export const Wrapper = styled.div`
  box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  width: 41rem;
  position: fixed;
  bottom: 3rem;
  right: 4rem;
  z-index: 5;
  background: white;
  padding: 1.8rem 2.5rem;

  @media only screen and (max-width: ${SCREEN_SIZES.TABLET}px) {
    bottom: 0;
    left: 0;
    width: 100%;
    box-sizing: border-box;
    border-radius: 0px;
    padding-top: 2.5rem;
  }
`;

export const Links = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const Notification = styled.div`
  position: relative;
`;

export const CloseBtn = styled(Close)`
  position: absolute;
  right: -0.9rem;
  top: -0.9rem;
  cursor: pointer;
  :hover {
    opacity: ${({ theme }) => theme.textDecoration.opacity};
  }
  @media only screen and (max-width: ${SCREEN_SIZES.TABLET}px) {
    right: -1.4rem;
    top: -0.9rem;
  }
`;

export const AnimatedCookieBannerText = styled(CookieBannerText)`
  max-height: 53px;
  transition: max-height 1s ease-in;

  ${({ expanded }) => expanded && "max-height: 1000px;"}
  height: auto;
  overflow: hidden;
`;

export const ExpandBtn = styled(Expand)`
  margin-left: 2rem;
  cursor: pointer;
  :hover {
    opacity: ${({ theme }) => theme.textDecoration.opacity};
  }
`;
