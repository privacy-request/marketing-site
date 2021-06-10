import React from "react";
import { LegalPageHeading, LegalPageTextWrapper } from "../typography";
import styled from "styled-components";
import { createKeyFromStr } from "../utils/helpers";
import { Link, RichText, Date } from "prismic-reactjs";

const Wrapper = styled.div`
  max-width: 75rem;
  margin: auto;
`;

const LegalPageContent = ({ first_section, body, last_section }) => {
  return (
    <Wrapper>
      <LegalPageTextWrapper>
        <RichText render={first_section.raw} />
      </LegalPageTextWrapper>
      {body.map((section) => (
        <React.Fragment key={createKeyFromStr(section.heading)}>
          <LegalPageHeading id={createKeyFromStr(section.heading)}>
            {section.heading}
          </LegalPageHeading>
          {section.content}
        </React.Fragment>
      ))}
      <LegalPageTextWrapper>
        <RichText render={last_section.raw} />
      </LegalPageTextWrapper>
    </Wrapper>
  );
};

export default LegalPageContent;
