import React from "react";
import { RichText } from "prismic-reactjs";
import { RichTextWrapper } from "../typography";

const RichTextSection = ({ data }) => {
  return (
    <RichTextWrapper>
      <RichText render={data.primary.content.raw} />
    </RichTextWrapper>
  );
};

export default RichTextSection;
