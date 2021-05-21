import React from "react";
import styled from "styled-components";
import Image from "../../Image";
import { TeamMemberName, TeamMemberTitle } from "../../typography";
import { SCREEN_SIZES } from "../../utils/constants";

export const Wrapper = styled.div`
  width: 25rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 10rem;
  @media only screen and (max-width: ${SCREEN_SIZES.TABLET}px) {
    width: 15rem;
  }
`;

export const Avatar = styled(Image)`
  height: 10rem;
  width: 10rem;
  margin-bottom: 2.4rem;
  @media only screen and (max-width: ${SCREEN_SIZES.MOBILE_LARGE}px) {
    width: 7rem;
    height: 7rem;
  }
`;

export const SocialMedia = styled.div`
  margin-top: 2.4rem;
`;

export const SocialMediaLink = styled.a`
  margin: 0 0.6rem;
`;
