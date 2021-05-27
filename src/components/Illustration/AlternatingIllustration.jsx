import { Img, Wrapper } from "./Illustration.styles";
import React, { useEffect, useState } from "react";

import isMobileScreen from "../utils/isMobileScreen";

const AlternatingIllustration = ({
  illustrations,
  vertical_margin,
  horizontal_margin,
  vertical_offset,
  horizontal_offset,
  visual_height,
  visual_width,
  mobile_width,
  mobile_vertical_margin,
  mobile_horizontal_margin,
  mobile_vertical_offset,
  mobile_horizontal_offset,
  mobile_visual_height,
  mobile_visual_width,
  scaleImage,
  rotation_speed,
}) => {
  const [focusedIllustrationIndex, setFocusedIllustrationIndex] = useState(0);

  useEffect(() => {
    const id = setTimeout(() => {
      setFocusedIllustrationIndex(
        illustrations[focusedIllustrationIndex + 1]
          ? focusedIllustrationIndex + 1
          : 0
      );
    }, rotation_speed);
    return () => clearTimeout(id);
  }, [focusedIllustrationIndex, rotation_speed]);

  const responsiveProps = isMobileScreen()
    ? {
        img: illustrations[focusedIllustrationIndex].illustration,
        vMargin: mobile_vertical_margin,
        hMargin: mobile_horizontal_margin,
        vOffset: mobile_vertical_offset,
        hOffset: mobile_horizontal_offset,
        vHeight: mobile_visual_height,
        vWidth: mobile_visual_width,
        width: mobile_width,
      }
    : {
        img: illustrations[focusedIllustrationIndex].illustration,
        vMargin: vertical_margin,
        hMargin: horizontal_margin,
        vOffset: vertical_offset,
        hOffset: horizontal_offset,
        vHeight: visual_height,
        vWidth: visual_width,
      };

  const maxHeight = illustrations.reduce((a, b) => {
    return Math.max(
      a.illustration ? a.illustration.dimensions.height : a,
      b.illustration.dimensions.height
    );
  });

  const {
    vMargin,
    hMargin,
    vOffset,
    hOffset,
    vHeight,
    vWidth,
    width,
    height,
    img,
  } = responsiveProps;

  const wrapperProps = {
    verticalMargin: vMargin,
    horizontalMargin: hMargin,
    height: vHeight ? vHeight : height ? height : maxHeight,
    width: vWidth ? vWidth : width ? width : img.dimensions.width,
  };

  const imgProps = {
    image: img,
    verticalOffset: vOffset,
    horizontalOffset: hOffset,
    width: wrapperProps.width,
    height: maxHeight,
  };

  return (
    <>
      <Wrapper {...wrapperProps}>
        <Img scaleImage={scaleImage} {...imgProps}></Img>
      </Wrapper>
    </>
  );
};

export default AlternatingIllustration;
