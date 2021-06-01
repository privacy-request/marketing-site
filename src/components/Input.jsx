import React from "react";
import styled from "styled-components";

const Wrapper = styled.div``;

const Label = styled.label``;

const Input = styled.input``;

const InputWithLabel = ({ label, name }) => {
  console.log("test");

  return (
    <Wrapper>
      <Label>{label.text}</Label>
      <Input type="text" name={name} />
    </Wrapper>
  );
};

export default InputWithLabel;
