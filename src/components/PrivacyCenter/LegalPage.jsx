import React from "react";
import { LegalPageHeading } from "../typography";
import styled from "styled-components";
import { createKeyFromStr } from "../utils/helpers";

const Wrapper = styled.div`
  max-width: 75rem;
  margin: auto;
`;

const LegalPage = ({ sections, introduction, outro }) => {
  return (
    <Wrapper>
      {introduction}
      {sections.map((section) => (
        <React.Fragment key={createKeyFromStr(section.heading)}>
          <LegalPageHeading id={createKeyFromStr(section.heading)}>
            {section.heading}
          </LegalPageHeading>
          {section.content}
        </React.Fragment>
      ))}
      {outro}
    </Wrapper>
  );
};

export default LegalPage;
