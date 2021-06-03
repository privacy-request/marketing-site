import React from "react";
import { ProductPageHeadline, ProductPageSubheadline } from "../typography";
import { HeroBackgroundImage, Hero, Emoji } from "./ConfirmationMessage.styles";

const ConfirmationMessage = ({ heading, message }) => {
  return (
    <Hero>
      <Emoji role="img" aria-label="Party popper">
        &#127881;
      </Emoji>
      <ProductPageHeadline>{heading}</ProductPageHeadline>
      <ProductPageSubheadline>{message}</ProductPageSubheadline>
      <HeroBackgroundImage />
    </Hero>
  );
};

export default ConfirmationMessage;
