import React from "react";
import styled from "styled-components";

const Wrapper = styled.div``;

const Label = styled.label``;

const Input = styled.input``;

const InputWithLabel = ({ value, label, onChange }) => {
  console.log("test");

  return (
    <Wrapper>
      <Label>{label}</Label>
      <Input type="text" {...{ value, onChange }} />
    </Wrapper>
  );
};

export default InputWithLabel;
