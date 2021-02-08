import React from "react";
import styled from "styled-components";
import Image from "./Image";

const Img = styled(Image)`
  right: 0;
  top: ${({ verticalOffset }) => (verticalOffset ? verticalOffset : 0)}px;
  left: ${({ horizontalOffset }) =>
    horizontalOffset ? horizontalOffset : 0}px;
  margin: auto;
  position: absolute;
`;
const Wrapper = styled.div`
  max-width: ${({ theme: { width } }) => width.sectionColumLg};
  position: relative;
  display: flex;
  width: ${({ width }) => `${width}px` || "100%"};
  margin: ${({ verticalMargin, horizontalMargin }) =>
    `${verticalMargin || 0}px ${horizontalMargin || 0}px`};
  height: ${({ height }) => height}px;
  z-index: 2;
`;

const Illustration = ({
  illustration,
  verticalMargin,
  horizontalMargin,
  verticalOffset,
  horizontalOffset,
  visualHeight,
  visualWidth,
}) => (
  <Wrapper
    verticalMargin={verticalMargin}
    horizontalMargin={horizontalMargin}
    height={visualHeight ? visualHeight : illustration.dimensions.height}
    width={visualWidth ? visualWidth : illustration.dimensions.width}
  >
    <Img
      image={illustration}
      verticalOffset={verticalOffset}
      horizontalOffset={horizontalOffset}
    ></Img>
  </Wrapper>
);

export default Illustration;
