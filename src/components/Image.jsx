import React from "react";
import styled from "styled-components";

const Img = styled.img`
  height: ${({ height }) => height}px;
  width: ${({ width }) => width}px;
`;

const Image = ({
  className,
  width,
  height,
  image: { url, alt, dimensions },
}) => (
  <Img
    className={className}
    src={url}
    alt={alt}
    height={height ? height : dimensions.height}
    width={width ? width : dimensions.width}
  />
);

export default Image;
