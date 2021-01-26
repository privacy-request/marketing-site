import styled from "styled-components";

export const typographyThemes = {
  font_size: {
    paragraph: {
      small: "1.8rem",
      medium: "2rem",
      large: "2.4rem",
    },
    link: {
      small: "1.1rem",
      medium: "1.4rem",
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

export const NavItem = styled.li`
  ${({ theme, bold, colour, active }) => `
    font-size: ${theme.font_size.link.medium};
    font-weight: ${bold ? "bold" : "normal"};
    text-decoration: none;
    a {
      color: ${colour ? colour : theme.colour.grey.dark};
    }

    ${active && "opacity: 0.5;"}
  `}
`;
