import React from "react";
import { LegalPageHeading, LegalPageParagraph } from "../typography";

const LegalPageSection = ({ heading, tocNumber, subSections }) => (
  <>
    {heading && (
      <LegalPageHeading>{`${tocNumber}. ${heading}`}</LegalPageHeading>
    )}
    {subSections.map(({ paragraph, subheading }, subIndex) => (
      <LegalPageParagraph>{`${tocNumber}.${subIndex + 1} ${subheading.text}. ${
        paragraph.text
      }`}</LegalPageParagraph>
    ))}
  </>
);

export default LegalPageSection;
