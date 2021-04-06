import React from "react";
import styled from "styled-components";
import { LegalPageHeading, LegalPageParagraph } from "../typography";

const Wrapper = styled.div`
  max-width: 78rem;
  margin: auto;
`;

const LegalPageSection = ({ heading, paragraphs }) => (
  <Wrapper>
    {heading && <LegalPageHeading>{heading}</LegalPageHeading>}
    {paragraphs.map((paragraph) => (
      <LegalPageParagraph>{paragraph}</LegalPageParagraph>
    ))}
  </Wrapper>
);

export default LegalPageSection;
