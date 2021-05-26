import React from "react";
import isMobileScreen from "../utils/isMobileScreen";
import { Wrapper, Img } from "./Illustration.styles";

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
  scaleImage,
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
        <Img scaleImage={scaleImage} {...imgProps}></Img>
      </Wrapper>
    </>
  );
};

export default Illustration;
