import styled, { css } from "styled-components";

export const typographyThemes = {
  font_size: {
    paragraph: {
      small: "1.8rem",
      medium: "2rem",
      large: "2.4rem",
    },
    link: {
      xsmall: "1.1rem",
      small: "1.4rem",
      medium: "1.6rem",
      large: "2.4rem",
    },
    header: {
      small: "3.2rem",
      medium: "4rem",
      large: "5.6rem",
      extra_large: "6.4rem",
    },
    subheader: "1.6rem",
    label: "1.6rem",
  },
  text_decoration: {
    opacity: "0.5",
  },
};

const baseTypographyStyles = css`
  ${({ theme, fontSize, bold, colour }) => `
    font-size: ${fontSize};
    font-weight: ${bold ? "bold" : "normal"};
    color: ${colour ? colour : theme.colour.grey.dark};
  `}
`;

export const NavItem = styled.li`
  ${baseTypographyStyles}
  line-height: 4rem;
  text-decoration: none;
  a {
    text-decoration: none;
    color: ${({ colour, theme }) => (colour ? colour : theme.colour.grey.dark)};
  }
  /* opacity: ${({ active, theme }) =>
    active ? theme.text_decoration.opacity : "1"}; */
`;
