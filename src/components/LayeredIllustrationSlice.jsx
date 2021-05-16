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
  top_illustration,
  vertical_margin,
  horizontal_margin,
  vertical_offset,
  horizontal_offset,
  visual_height,
  visual_width,
  mobile_width,
  Illustration_mobile,
  mobile_vertical_margin,
  mobile_horizontal_margin,
  mobile_vertical_offset,
  mobile_horizontal_offset,
  mobile_visual_height,
  mobile_visual_width,
}) => {
  const responsiveProps = isMobileScreen()
    ? {
        img:
          Illustration_mobile && Illustration_mobile.url
            ? Illustration_mobile
            : illustration,
        vMargin: mobile_vertical_margin,
        hMargin: mobile_horizontal_margin,
        vOffset: mobile_vertical_offset,
        hOffset: mobile_horizontal_offset,
        vHeight: mobile_visual_height,
        vWidth: mobile_visual_width,
        width: mobile_width,
      }
    : {
        img: illustration,
        vMargin: vertical_margin,
        hMargin: horizontal_margin,
        vOffset: vertical_offset,
        hOffset: horizontal_offset,
        vHeight: visual_height,
        vWidth: visual_width,
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
    isBottom: !!top_illustration,
  };

  return (
    <>
      <Wrapper {...wrapperProps}>
        <Img {...imgProps} mixBlend></Img>
        <Img {...imgProps} image={top_illustration} />
      </Wrapper>
    </>
  );
};

export default Illustration;
