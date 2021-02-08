import React from "react";
import styled from "styled-components";

const Img = styled.img`
  height: ${({ height }) => height}px;
  width: ${({ width }) => width}px;
`;

const Image = ({
  className,
  image: {
    url,
    alt,
    dimensions: { height, width },
  },
}) => (
  <Img
    className={className}
    src={url}
    alt={alt}
    height={height}
    width={width}
  />
);

export default Image;
