import React from "react";
import styled from "styled-components";
import { SCREEN_SIZES } from "../utils/constants";

export const Wrapper = styled.div`
  width: ${({ theme }) => theme.width.sectionColumLg};
  display: flex;
  align-items: center;
  z-index: 2;
  @media only screen and (max-width: ${SCREEN_SIZES.LAPTOP}px) {
    width: 100%;
  }
`;

export const Content = styled.div`
  margin-left: 4rem;
`;
