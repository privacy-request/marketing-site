import React from "react";
import LegalPageNav from "./LegalPageNav";
import { LegalPageTitle } from "../typography";
import styled from "styled-components";
import { SCREEN_SIZES } from "../utils/constants";

const Wrapper = styled.div`
  max-width: ${({ theme }) => theme.width.section};
  margin: 4.4rem auto;
  padding: 0 3rem;
`;

const Title = styled(LegalPageTitle)`
  border-bottom: 1px solid #e3e3e3;
  padding-bottom: 5rem;
  @media only screen and (max-width: ${SCREEN_SIZES.TABLET}px) {
    padding-bottom: 3rem;
  }
`;

const NavAndContentWrapper = styled.div`
  display: flex;
  margin-top: 4rem;
  @media only screen and (max-width: ${SCREEN_SIZES.TABLET}px) {
    flex-direction: column;
  }
`;

const Content = styled.div`
  margin: auto;
`;

const LegalPageLayout = ({ title, children }) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <NavAndContentWrapper>
        <LegalPageNav />
        <Content>{children}</Content>
      </NavAndContentWrapper>
    </Wrapper>
  );
};

export default LegalPageLayout;
