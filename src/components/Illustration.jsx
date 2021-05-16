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
  width: ${({ width }) => `${width}px` || "100%"};
  position: absolute;
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
  @media only screen and (max-width: ${SCREEN_SIZES.LAPTOP}px) {
    margin: ${({ verticalMargin, horizontalMargin }) =>
      `${verticalMargin || 0}px ${
        horizontalMargin ? `${horizontalMargin}px` : "0"
      }`};
  }
  height: ${({ height }) => height}px;
  z-index: 2;
`;

const Illustration = ({
  illustration,
  vertical_margin,
  horizontal_margin,
  vertical_offset,
  horizontal_offset,
  visual_height,
  visual_width,
  mobile_width,
  illustration_mobile,
  mobile_vertical_margin,
  mobile_horizontal_margin,
  mobile_vertical_offset,
  mobile_horizontal_offset,
  mobile_visual_height,
  mobile_visual_width,
}) => {
  const responsiveProps = isMobileScreen()
    ? {
        img: illustration_mobile.url ? illustration_mobile : illustration,
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
    width: wrapperProps.width,
  };

  return (
    <>
      <Wrapper {...wrapperProps}>
        <Img {...imgProps}></Img>
      </Wrapper>
    </>
  );
};

export default Illustration;
