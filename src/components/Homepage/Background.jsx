import React from "react";
import styled, { css } from "styled-components";
import HomepageProductsBackgroundLeft2 from "../../../assets/hpProductsLeft2.svg";
import HomepageProductsBackgroundLeft from "../../../assets/hpProductsLeft.svg";
import HomepageProductsBackgroundRight from "../../../assets/hpProductsRight.svg";

const backgroundStyles = css`
  position: absolute;
  top: 0;
  width: 1440px;
  height: 100%;
  z-index: 1;
`;

const BackgroundLeft = styled(HomepageProductsBackgroundLeft)`
  ${backgroundStyles}
  mix-blend-mode: multiply;
  top: 50px;
`;

const BackgroundRight = styled(HomepageProductsBackgroundRight)`
  ${backgroundStyles}
  mix-blend-mode: multiply;
  right: 0;
  top: 30px;
`;

const BackgroundLeft2 = styled(HomepageProductsBackgroundLeft2)`
  ${backgroundStyles}
  top: 500px;
  mix-blend-mode: screen;
`;

const HomepageBackground = () => (
  <>
    <BackgroundLeft />
    <BackgroundLeft2 />
    <BackgroundRight />
  </>
);

export default HomepageBackground;
