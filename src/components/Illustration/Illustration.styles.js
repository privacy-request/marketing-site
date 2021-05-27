import Image from "../Image";
import { SCREEN_SIZES } from "../utils/constants";
import styled from "styled-components";

export const Img = styled(Image)`
  right: 0;
  bottom: 0;
  height: ${({ height }) => (height ? `${height}px` : "auto")};
  top: ${({ verticalOffset }) => (verticalOffset ? verticalOffset : 0)}px;
  left: ${({ horizontalOffset }) =>
    horizontalOffset ? horizontalOffset : 0}px;
  margin: auto;
  width: ${({ width }) => `${width}px` || "100%"};
  position: absolute;
  @media only screen and (max-width: 1200px) {
    max-width: ${({ scaleImage }) => (scaleImage ? "55rem" : "100rem")};
  }
`;

export const Wrapper = styled.div`
  max-width: ${({ theme: { width } }) => width.sectionColumLg};
  position: relative;
  display: flex;
  width: ${({ width }) => `${width}px` || "100%"};
  margin: ${({ verticalMargin, horizontalMargin }) =>
    `${verticalMargin || 0}px ${
      horizontalMargin ? `${horizontalMargin}px` : "auto"
    }`};
  @media only screen and (max-width: ${SCREEN_SIZES.LAPTOP}px) {
    margin: ${({ verticalMargin, horizontalMargin }) =>
      `${verticalMargin || 0}px ${
        horizontalMargin ? `${horizontalMargin}px` : "0"
      }`};
  }
  height: ${({ height }) => height}px;
  z-index: 2;
`;
