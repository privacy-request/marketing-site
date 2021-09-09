import React from "react";
import { RichText } from "prismic-reactjs";
import { RichTextWrapper } from "../typography";

const RichTextSection = ({ data }) => {
  return (
    <RichTextWrapper>
      <RichText render={data} />
    </RichTextWrapper>
  );
};

export default RichTextSection;
