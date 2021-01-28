import React, { useState } from "react";
import styled, { withTheme } from "styled-components";
import { NavItem } from "../../typography";
import { Link } from "gatsby";

const Container = styled.div`
  cursor: pointer;
`;

const Title = styled.div`
  display: flex;
  align-items: center;
`;

const Symbol = styled.div`
  margin: 0 0 0.6rem 0.6rem;
  font-weight: normal;
  transition: all 200ms ease;
  transform-origin: 48% 63%;
  line-height: 1.8rem;
  transform: ${({ isOpen }) => (isOpen ? "rotate(135deg)" : "rotate(0deg)")};
`;

const SubItems = styled.ul`
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.2s cubic-bezier(0, 1, 0, 1);

  ${({ isOpen }) =>
    isOpen &&
    `
    max-height: 1000px;
    transition: max-height 0.2s cubic-bezier(1, 0, 1, 0);
  `}
  height: auto;
`;

const AccordionMenu = ({ title, pages, theme, parentMenuOpen }) => {
  const [isOpen, setIsOpen] = useState(false);

  !parentMenuOpen && isOpen && setIsOpen(false);

  return (
    <Container>
      <Title onClick={() => setIsOpen(!isOpen)}>
        {title}
        <Symbol isOpen={isOpen}>+</Symbol>
      </Title>
      <SubItems isOpen={isOpen}>
        {pages.map((page) => (
          <NavItem
            fontSize={theme.font_size.link.medium}
            colour={theme.colour.white}
          >
            <Link to={page.url}>{page.title}</Link>
          </NavItem>
        ))}
      </SubItems>
    </Container>
  );
};

export default withTheme(AccordionMenu);
