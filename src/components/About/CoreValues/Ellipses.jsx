import React from "react";
import styled from "styled-components";

const Ellipse = styled.div`
  height: 1.2rem;
  width: 1.2rem;
  border-radius: 50%;
  background: ${({ active, theme }) => (active ? "#E6F5FF" : "#203546")};
  margin: 0 0.72rem;
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Ellipses = ({ coreValues, focusedCoreValueIndex }) => {
  return (
    <Wrapper>
      {coreValues.map((value, index) => (
        <Ellipse active={index === focusedCoreValueIndex} />
      ))}
    </Wrapper>
  );
};

export default Ellipses;
