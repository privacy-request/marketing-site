import React from "react";
import { Link } from "gatsby";
import styled, { withTheme } from "styled-components";
import { NavItem } from "../../typography";

const NavItemWithTooltip = styled(NavItem)`
  margin-right: ${({ theme }) => theme.spacing.nav_items};
  position: relative;
`;

const NavLink = styled(Link)``;

const Title = styled.span`
  cursor: default;
  ${NavItemWithTooltip}:hover & {
    opacity: ${({ theme }) => theme.text_decoration.opacity};
  }
`;

const Tooltip = styled.div`
  position: absolute;
  left: 50%;
  top: 5rem;
  transition: all 0.1s cubic-bezier(0.455, 0.03, 0.515, 0.955) 0.05s;
  transform: translateY(3rem) translateX(-50%);
  visibility: hidden;
  opacity: 0;
  ${NavItemWithTooltip}:hover & {
    visibility: visible;
    opacity: 1;
    transform: translateY(0) translateX(-50%);
  }
`;

const TooltipContent = styled.ul`
  border: 1px solid rgba(227, 227, 227, 0.5);
  border-radius: 4px;
  box-shadow: 0px 12px 28px rgba(32, 53, 70, 0.11);
  padding: 2rem;
`;

const TooltipNavItem = styled(NavItem)`
  display: flex;
  justify-content: flex-start;
  white-space: nowrap;
  cursor: pointer;
  margin-bottom: ${({ isLastChild }) => (!isLastChild ? "1.4rem" : "0")};
  :hover {
    opacity: ${({ theme }) => theme.text_decoration.opacity};
  }
`;

const TooltipTriangle = styled.div`
  position: absolute;
  top: -2.5rem;
  left: 0px;
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

const TooltipMenu = ({ title, pages, path, theme }) => (
  <NavItemWithTooltip fontSize={theme.font_size.link.small} bold>
    <Title>{title}</Title>
    <Tooltip>
      <TooltipContent>
        {pages.map((page, index) => (
          <TooltipNavItem
            key={`page-${page.url}`}
            active={path === page.url}
            isLastChild={index + 1 === pages.length}
          >
            <NavLink to={page.url}>{page.title}</NavLink>
          </TooltipNavItem>
        ))}
      </TooltipContent>
      <TooltipTriangle />
    </Tooltip>
  </NavItemWithTooltip>
);

export default withTheme(TooltipMenu);
