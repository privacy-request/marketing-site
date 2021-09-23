import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  margin-bottom: 3.2rem;
`;

const Label = styled.label`
  font-size: 16px;
  line-height: 19px;
  display: block;
  position: relative;
  padding-left: 35px;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  input:checked ~ span:after {
    display: block;
  }
  input:checked ~ span {
    background-color: #2196f3;
  }
  span:after {
    content: "";
    position: absolute;
    display: none;
  }
  span:after {
    left: 9px;
    top: 5px;
    width: 7px;
    height: 12px;
    border: solid white;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
`;

const Input = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
`;

const Checkmark = styled.span`
  position: absolute;
  top: -5px;
  left: 0;
  height: 25px;
  width: 25px;
  background-color: #eee;
`;

const Checkbox = ({ label, name, className }) => {
  return (
    <Wrapper className={className}>
      <Label>
        {label}
        <Input type="checkbox" name={name} />
        <Checkmark></Checkmark>
      </Label>
    </Wrapper>
  );
};

export default Checkbox;
