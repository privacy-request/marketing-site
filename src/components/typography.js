import styled from "styled-components";
import { Link } from "gatsby";
import { SCREEN_SIZES } from "./utils/constants";

const fontSize = {
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
    xlarge: "6.4rem",
  },
};

const textDecoration = {
  opacity: "0.5",
};

const lineHeight = {
  small: "3rem",
  medium: "4rem",
  large: "5.2rem",
  xlarge: "8.3rem",
};

export const typographyTheme = { fontSize, textDecoration, lineHeight };

// Navigation - Desktop
export const DesktopNavItem = styled.li`
  font-size: ${fontSize.link.small};
  font-weight: bold;
  line-height: ${lineHeight.small};
  opacity: ${({ active }) => (active ? textDecoration.opacity : "1")};
  :hover {
    opacity: ${textDecoration.opacity};
  }
`;

export const DesktopNavSubitem = styled(DesktopNavItem)`
  font-weight: normal;
`;

export const DesktopNavDemo = styled(DesktopNavItem)`
  color: ${({ theme }) => theme.colour.blue.dark};
  font-weight: bold;
`;

// Navigation - Mobile
export const MobileNavItem = styled.li`
  font-size: ${fontSize.link.large};
  font-weight: bold;
  line-height: ${lineHeight.medium};
  color: ${({ theme }) => theme.colour.white};
`;

export const MobileNavDemo = styled(MobileNavItem)`
  color: ${({ theme }) => theme.colour.yellow};
`;

export const MobileNavSubitem = styled(MobileNavItem)`
  font-size: ${fontSize.link.medium};
  font-weight: normal;
`;

// Homepage
export const HomepageHeadline = styled.h1`
  font-size: ${fontSize.header.xlarge};
  background: linear-gradient(
    92.13deg,
    #009dff 3.73%,
    #6bcbff 60.51%,
    #8fd8ff 86.59%
  );

  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
  margin-bottom: 1.2rem;

  @media only screen and (max-width: ${SCREEN_SIZES.TABLET}px) {
    font-size: ${fontSize.header.small};
  }
`;

// Shared
export const CallToAction = styled(Link)`
  font-size: ${fontSize.link.medium};
  font-weight: bold;
  color: ${({ theme, inverted }) =>
    inverted ? theme.colour.blue.dark : theme.colour.white};
  background: ${({ theme, inverted }) =>
    inverted ? theme.colour.white : theme.colour.blue.dark};
  border: 2px solid ${({ theme }) => theme.colour.blue.dark};
  border-radius: ${({ theme }) => theme.borderRadius.button};
  height: 4.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  padding: 0 2.4rem;
  transition: transform 0.1s ease 0s;
  :active {
    transform: translateY(1px);
  }
`;

export const Paragraph = styled.p`
  font-size: ${fontSize.paragraph.medium};
  margin-bottom: 2.8rem;
`;
