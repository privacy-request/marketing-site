import React from "react";
import styled, { css } from "styled-components";
import HomepageProductsBackground1 from "../../../assets/hpProducts1.svg";
import HomepageProductsBackground2 from "../../../assets/hpProducts2.svg";

const backgroundStyles = css`
  position: absolute;
  max-width: 150rem;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  height: 110%;
  left: 0;
  right: 0;
  top: 40px;
  z-index: 1;
`;

const Background = styled(HomepageProductsBackground1)`
  ${backgroundStyles}
  mix-blend-mode: multiply;
`;

const Background2 = styled(HomepageProductsBackground2)`
  ${backgroundStyles}
  mix-blend-mode: screen;
`;

const HomepageBackground = () => (
  <>
    <Background />
    <Background2 />
  </>
);

export default HomepageBackground;
