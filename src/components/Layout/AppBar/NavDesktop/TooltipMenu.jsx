import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { DesktopNavItem, DesktopNavSubitem } from "../../../typography";

const TooltipWrapper = styled.ul`
  margin-right: ${({ theme: { margin } }) => margin.navItemDesktop};
  position: relative;
`;

const Title = styled(DesktopNavItem)`
  cursor: pointer;
`;

const Tooltip = styled.div`
  position: absolute;
  left: 50%;
  top: 5rem;
  transition: all 0.1s cubic-bezier(0.455, 0.03, 0.515, 0.955) 0.05s;
  transform: translateY(3rem) translateX(-50%);
  visibility: hidden;
  opacity: 0;
  background: ${({ theme }) => theme.colour.white};
  z-index: 4;
  ${TooltipWrapper}:hover & {
    visibility: visible;
    opacity: 1;
    transform: translateY(0) translateX(-50%);
  }
`;

const TooltipContent = styled.ul`
  border: 1px solid rgba(227, 227, 227, 0.5);
  border-radius: 4px;
  box-shadow: 0px 12px 28px rgba(32, 53, 70, 0.11);
  padding: 1.5rem 2rem;
`;

const TooltipTypography = styled(DesktopNavSubitem)`
  display: flex;
  justify-content: flex-start;
  white-space: nowrap;
  cursor: pointer;
`;

const TooltipTriangle = styled.div`
  position: absolute;
  top: -2.5rem;
  left: 0;
  width: 100%;
  height: 3.5rem;

  ::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 1.8rem;
    height: 1.8rem;
    transform: translateX(-50%) rotate(45deg);
    border-top: 1px solid rgba(227, 227, 227, 0.5);
    border-left: 1px solid rgba(227, 227, 227, 0.5);
    background: ${({ theme }) => theme.colour.white};
  }
`;

const TooltipMenu = ({ title, items, path }) => (
  <TooltipWrapper>
    <Title as="div">{title}</Title>
    <Tooltip>
      <TooltipContent>
        {items.map((item, index) => (
          <TooltipTypography
            key={`page-${item.route.text}`}
            active={path === item.route.text}
            isLastChild={index + 1 === items.length}
          >
            <Link to={item.route.text}>{item.text.text}</Link>
          </TooltipTypography>
        ))}
      </TooltipContent>
      <TooltipTriangle />
    </Tooltip>
  </TooltipWrapper>
);

export default TooltipMenu;
