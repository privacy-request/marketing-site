import React from "react";
import styled from "styled-components";
import Image from "./Image";
import isMobileScreen from "./utils/isMobileScreen";
import { SCREEN_SIZES } from "./utils/constants";

const Img = styled(Image)`
  right: 0;
  bottom: 0;
  top: ${({ verticalOffset }) => (verticalOffset ? verticalOffset : 0)}px;
  left: ${({ horizontalOffset }) =>
    horizontalOffset ? horizontalOffset : 0}px;
  margin: auto;
  position: absolute;
  mix-blend-mode: ${({ mixBlend }) => (mixBlend ? "darken" : "initial")};
`;
const Wrapper = styled.div`
  max-width: ${({ theme: { width } }) => width.sectionColumLg};
  position: relative;
  display: flex;
  width: ${({ width }) => `${width}px` || "100%"};
  margin: ${({ verticalMargin, horizontalMargin }) =>
    `${verticalMargin || 0}px ${
      horizontalMargin ? `${horizontalMargin}px` : "auto"
    }`};
  background: inherit;
  @media only screen and (max-width: ${SCREEN_SIZES.LAPTOP}px) {
    margin: ${({ verticalMargin, horizontalMargin }) =>
      `${verticalMargin || 0}px ${
        horizontalMargin ? `${horizontalMargin}px` : "0"
      }`};
  }
  height: ${({ height }) => height}px;
  z-index: 2;
  @media only screen and (max-width: ${SCREEN_SIZES.LAPTOP}px) {
    background: linear-gradient(183.3deg, #ffe01b 62.45%, #fff170 160.76%);
  }
`;

const Illustration = ({
  illustration,
  topIllustration,
  verticalMargin,
  horizontalMargin,
  verticalOffset,
  horizontalOffset,
  visualHeight,
  visualWidth,
  mobileWidth,
  mobileIllustration,
  mobileVerticalMargin,
  mobileHorizontalMargin,
  mobileVerticalOffset,
  mobileHorizontalOffset,
  mobileVisualHeight,
  mobileVisualWidth,
}) => {
  const responsiveProps = isMobileScreen()
    ? {
        img: mobileIllustration.url ? mobileIllustration : illustration,
        vMargin: mobileVerticalMargin,
        hMargin: mobileHorizontalMargin,
        vOffset: mobileVerticalOffset,
        hOffset: mobileHorizontalOffset,
        vHeight: mobileVisualHeight,
        vWidth: mobileVisualWidth,
        width: mobileWidth,
      }
    : {
        img: illustration,
        vMargin: verticalMargin,
        hMargin: horizontalMargin,
        vOffset: verticalOffset,
        hOffset: horizontalOffset,
        vHeight: visualHeight,
        vWidth: visualWidth,
      };

  const {
    img,
    vMargin,
    hMargin,
    vOffset,
    hOffset,
    vHeight,
    vWidth,
    width,
    height,
  } = responsiveProps;

  const wrapperProps = {
    verticalMargin: vMargin,
    horizontalMargin: hMargin,
    height: vHeight ? vHeight : height ? height : img.dimensions.height,
    width: vWidth ? vWidth : width ? width : img.dimensions.width,
  };

  const imgProps = {
    image: img,
    verticalOffset: vOffset,
    horizontalOffset: hOffset,
    width: width,
    isBottom: !!topIllustration,
  };

  return (
    <>
      <Wrapper {...wrapperProps}>
        <Img {...imgProps} mixBlend></Img>
        <Img {...imgProps} image={topIllustration} />
      </Wrapper>
    </>
  );
};

export default Illustration;