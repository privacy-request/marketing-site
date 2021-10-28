import React from "react";
import { RichText } from "prismic-reactjs";
import { RichTextWrapper } from "../typography";

const RichTextSection = ({ data, paragraphFontSize, className }) => {
  return (
    <RichTextWrapper
      paragraphFontSize={paragraphFontSize}
      className={className}
    >
      <RichText render={data} />
    </RichTextWrapper>
  );
};

export default RichTextSection;
