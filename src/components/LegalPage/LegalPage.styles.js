import styled from "styled-components";
import { LegalPageTitle } from "../typography";
import { SCREEN_SIZES } from "../utils/constants";

export const Wrapper = styled.div`
  max-width: ${({ theme }) => theme.width.section};
  margin: 4.4rem auto;
  padding: 0 3rem;
`;

export const Title = styled(LegalPageTitle)`
  border-bottom: 1px solid #e3e3e3;
  padding-bottom: 5rem;
  padding-left: 3rem;
  @media only screen and (max-width: ${SCREEN_SIZES.TABLET}px) {
    padding-bottom: 3rem;
    padding-left: 0;
  }
`;

export const NavAndContentWrapper = styled.div`
  display: flex;
  margin-top: 7rem;
  margin-right: 3rem;
  @media only screen and (max-width: ${SCREEN_SIZES.TABLET}px) {
    flex-direction: column;
    margin-top: 4rem;
  }
`;

export const Content = styled.div`
  margin: auto;
`;
