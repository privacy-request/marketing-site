import React from "react";
import { LegalPageParagraph, LegalPageHeading } from "../typography";
import styled from "styled-components";

const Wrapper = styled.div`
  max-width: 75rem;
  margin: auto;
`;

const LegalPage = ({
  effective,
  date,
  firstSection,
  lastSection,
  sections,
  currentPage,
}) => {
  return (
    <Wrapper>
      <LegalPageParagraph>{`${effective.text} ${date}`}</LegalPageParagraph>
      {firstSection.raw.map((element, index) => (
        <LegalPageParagraph key={`lp-intro-p-${index}-${currentPage}`}>
          {element.text}
        </LegalPageParagraph>
      ))}
      {sections.map((section, index) => (
        <React.Fragment key={`${currentPage}-section-${index}`}>
          <LegalPageHeading>{section.heading}</LegalPageHeading>
          {section.content}
        </React.Fragment>
      ))}
      {lastSection.raw.map((element, index) => (
        <LegalPageParagraph key={`lp-outro-p-${index}-${currentPage}`}>
          {element.text}
        </LegalPageParagraph>
      ))}
    </Wrapper>
  );
};

export default LegalPage;
