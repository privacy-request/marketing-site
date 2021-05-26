import React from "react";
import styled from "styled-components";
import { CoreValueTitle, CoreValueDescription } from "../../typography";
import { SCREEN_SIZES } from "../../utils/constants";

const Wrapper = styled.div`
  width: 60rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media only screen and (max-width: ${SCREEN_SIZES.TABLET}px) {
    width: auto;
  }
`;

const CoreValue = ({ coreValue, swipeHandlers }) => {
  return (
    <Wrapper {...swipeHandlers}>
      <CoreValueTitle>{coreValue.title.text}</CoreValueTitle>
      <CoreValueDescription>{coreValue.description.text}</CoreValueDescription>
    </Wrapper>
  );
};

export default CoreValue;
