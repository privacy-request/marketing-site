import React from "react";
import styled from "styled-components";

const ThreeLines = styled.div`
  position: relative;
  width: 2.8rem;
  height: 28px;
  padding: 0px;
  margin: 10px;
  cursor: pointer;
  transition: all 300ms ease;
  ${({ active }) => active && "transform: rotate(360deg)"};
`;

const Button = styled.button`
  cursor: pointer;
  width: 2.8rem;
  padding: 0px;
  height: 2px;
  background: ${({ theme }) => theme.colour.blue.dark};
  box-shadow: 0px 0px 0px transparent;
  border: 0px transparent;
  position: absolute;
  top: 50%;
  left: 0px;
  margin-top: -1px;
  -webkit-appearance: none;
  line-height: 0px;
  transition: all 150ms ease;
  &:active,
  &:focus {
    outline: 0px;
    border: 0px;
  }
  &::after,
  &::before {
    display: block;
    content: "";
    position: absolute;
    left: 0px;
    height: 2px;
    background: ${({ theme }) => theme.colour.blue.dark};
    width: 100%;
    transition: all 150ms ease;
  }
  &::after {
    top: -8px;
  }
  &::before {
    bottom: -8px;
    left: auto;
    right: 0px;
  }

  ${({ active }) =>
    active &&
    `background:transparent;
      &:after{
        transform: rotate(-135deg) translate(-6px, -6px) scale(1.2,1.2);
      }
      &:before{
        transform: rotate(135deg) translate(-6px, 6px) scale(1.2,1.2);
      }
    `};
`;

const Hamburger = ({ active, onClick }) => {
  return (
    <ThreeLines active={active} onClick={onClick}>
      <Button active={active} />
    </ThreeLines>
  );
};

export default Hamburger;
