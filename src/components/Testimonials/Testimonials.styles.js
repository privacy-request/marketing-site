import React from "react";
import styled from "styled-components";
import { SCREEN_SIZES } from "../utils/constants";
import Testimonial from "./Testimonial";
import LeftArrow from "../../../assets/leftArrow.svg";
import RightArrow from "../../../assets/rightArrow.svg";

export const Wrapper = styled.section`
  max-width: ${({ theme: { width } }) => width.section};
  margin-left: auto;

  @media only screen and (max-width: 1374px) {
    margin-left: 10rem;
  }
  @media only screen and (max-width: ${SCREEN_SIZES.LAPTOP}px) {
    margin-left: 0rem;
  }
  @media only screen and (max-width: ${SCREEN_SIZES.LAPTOP_LARGE}px) {
    padding: ${({ theme }) => theme.padding.site};
  }
`;

export const FocusedTestimonial = styled(Testimonial)``;

export const NextTestimonial = styled(Testimonial)`
  opacity: 0.2;
  position: absolute;
  right: -90rem;
`;

export const Carousel = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: fit-content;
`;

export const LeftArrowBtn = styled(LeftArrow)`
  position: absolute;
  left: -10rem;
  cursor: pointer;
`;

export const RightArrowBtn = styled(RightArrow)`
  position: absolute;
  right: -10rem;
  cursor: pointer;
`;
