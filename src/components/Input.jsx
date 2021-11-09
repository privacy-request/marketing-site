import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  margin-bottom: 3.2rem;
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const Input = styled.textarea`
  border: 1px solid rgba(117, 117, 117, 0.4);
  border-radius: 8px;
  padding: 1.25rem 2rem 1.25rem 2rem;
  height: 100%;
  font-size: 1.8rem;
  letter-spacing: 0.01rem;
`;

const Span = styled.span`
  font-size: 16px;
  line-height: 19px;
  margin-bottom: 1rem;
  color: #203546;
  border-radius: 8px;
`;

const InputWithLabel = ({ label, name, type, className, textArea }) => {
  return (
    <Wrapper className={className}>
      <Label>
        <Span>{label}</Span>
        <Input
          as={textArea ? "textarea" : "input"}
          type={type || "text"}
          name={name}
        />
      </Label>
    </Wrapper>
  );
};

export default InputWithLabel;
