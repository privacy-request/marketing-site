import React, { useState } from "react";
import isMobileScreen from "../../utils/isMobileScreen";
import styled from "styled-components";
import { CoreValueTitle, CoreValueDescription } from "../../typography";

const Wrapper = styled.div`
  width: 60rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const CoreValue = ({ coreValue }) => {
  return (
    <Wrapper>
      <CoreValueTitle>{coreValue.title.text}</CoreValueTitle>
      <CoreValueDescription>{coreValue.description.text}</CoreValueDescription>
    </Wrapper>
  );
};

export default CoreValue;
