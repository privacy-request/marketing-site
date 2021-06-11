import React from "react";
import styled from "styled-components";

const Ellipse = styled.div`
  height: 1.2rem;
  width: 1.2rem;
  border-radius: 50%;
  background: ${({ active, theme }) => (active ? "#203546" : "#E6F5FF")};
  margin: 0 0.72rem;
  cursor: pointer;
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Ellipses = ({
  coreValues,
  focusedCoreValueIndex,
  setFocusedCoreValueIndex,
}) => {
  return (
    <Wrapper>
      {coreValues.map((value, index) => (
        <Ellipse
          key={`ellipses-${index}`}
          onClick={() => setFocusedCoreValueIndex(index)}
          active={index === focusedCoreValueIndex}
        />
      ))}
    </Wrapper>
  );
};

export default Ellipses;
