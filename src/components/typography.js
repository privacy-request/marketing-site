import styled from "styled-components";
import { Link } from "gatsby";
import { SCREEN_SIZES } from "./utils/constants";

const fontSize = {
  paragraph: {
    xxsmall: "1.4rem",
    xsmall: "1.6rem",
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
    xxsmall: "1.3rem",
    xsmall: "1.5rem",
    small: "3.2rem",
    medium: "4rem",
    large: "5.6rem",
    xlarge: "6.4rem",
  },
};

const textDecoration = {
  opacity: "0.7",
};

const lineHeight = {
  xsmall: "2.7rem",
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
    opacity: ${({ noHover }) => (noHover ? "1" : textDecoration.opacity)};
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
  height: ${({ theme: { height } }) => height.callToAction};
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
  margin-bottom: ${({ theme: { margin } }) => margin.paragraph};

  @media only screen and (max-width: ${SCREEN_SIZES.TABLET}px) {
    font-size: ${fontSize.paragraph.xsmall};
  }
`;

export const Header = styled.h2`
  font-size: ${({ size }) =>
    size ? fontSize.header[size] : fontSize.header.large};
  margin-bottom: ${({ theme: { margin } }) => margin.HomepageHeadline};

  @media only screen and (max-width: ${SCREEN_SIZES.TABLET}px) {
    font-size: ${fontSize.header.small};
    margin-bottom: 0.4rem;
    line-height: ${lineHeight.medium};
  }
`;

export const Subheader = styled.h3`
  font-size: ${fontSize.header.xsmall};
  @media only screen and (max-width: ${SCREEN_SIZES.TABLET}px) {
    margin-bottom: 0.8rem;
  }
`;

// BookADemo
export const BookADemoHeadline = styled.h5`
  font-size: ${fontSize.header.large};
  font-weight: bold;
  text-align: center;
  margin-bottom: 1.3rem;
  @media only screen and (max-width: ${SCREEN_SIZES.TABLET}px) {
    font-size: ${fontSize.paragraph.large};
  }
`;

export const BookADemoParagraph = styled.p`
  font-size: ${fontSize.paragraph.large};
  margin-bottom: 4.8rem;
  text-align: center;
  @media only screen and (max-width: ${SCREEN_SIZES.TABLET}px) {
    font-size: ${fontSize.paragraph.small};
    margin-bottom: 2.6rem;
  }
`;

// Homepage
export const HomepageHeadline = styled.h1`
  font-size: ${fontSize.header.xlarge};
  line-height: ${lineHeight.xlarge};
  width: ${({ theme: { width } }) => width.heroHeadline};
  height: 24.9rem;
  @media only screen and (max-width: ${SCREEN_SIZES.TABLET}px) {
    height: 8.5rem;
  }
  @media only screen and (max-width: ${SCREEN_SIZES.MOBILE_LARGE}px) {
    height: 12rem;
  }
  background: linear-gradient(
    92.13deg,
    #009dff 3.73%,
    #6bcbff 60.51%,
    #8fd8ff 86.59%
  );

  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
  margin-bottom: ${({ theme: { margin } }) => margin.homepageHeadline.desktop};

  @media only screen and (max-width: ${SCREEN_SIZES.TABLET}px) {
    font-size: ${fontSize.header.small};
    line-height: ${lineHeight.medium};
    margin-bottom: ${({ theme: { margin } }) => margin.homepageHeadline.mobile};
    width: 100%;
  }
`;

// Testimonials
export const TestimonialsHeadline = styled.h5`
  font-size: ${fontSize.paragraph.small};
  font-weight: normal;
  margin-bottom: 4.8rem;
  @media only screen and (max-width: ${SCREEN_SIZES.TABLET}px) {
    margin-bottom: 2.7rem;
    font-size: ${fontSize.paragraph.xsmall};
  }
`;

export const TestimonialParagraph = styled.p`
  font-size: ${({ theme }) => theme.fontSize.paragraph.large};
  margin-bottom: 1.6rem;
  @media only screen and (max-width: ${SCREEN_SIZES.TABLET}px) {
    margin-bottom: 0.8rem;
    font-size: ${({ theme }) => theme.fontSize.paragraph.xxsmall};
  }
`;
export const NameAndJob = styled.p`
  font-size: ${({ theme }) => theme.fontSize.header.xxsmall};
  color: ${({ theme }) => theme.colour.blue.dark};
  font-weight: bold;
  margin-bottom: 0;
`;

export const Company = styled.span`
  color: ${({ theme }) => theme.colour.grey.dark};
`;

// Footer
export const PrivacyCenterTitle = styled.p`
  font-size: ${fontSize.paragraph.small};
  font-weight: bold;
  opacity: 0.3;
`;

export const PrivacyCenterNavItem = styled(DesktopNavSubitem)`
  font-size: ${fontSize.link.xsmall};
  line-height: 3rem;
`;

export const Copyright = styled.p`
  font-size: ${fontSize.link.xsmall};
`;

// ProductPage
export const ProductPageHeadline = styled.h1`
  font-size: ${fontSize.header.medium};
  font-weight: bold;
  margin-bottom: 1.5rem;
  @media only screen and (max-width: ${SCREEN_SIZES.LAPTOP}px) {
    font-size: ${fontSize.header.small};
  }
`;

export const ProductPageSubheadline = styled.h2`
  font-size: ${fontSize.paragraph.medium};
  font-weight: normal;
  margin-bottom: 3rem;
`;

// CookieBanner
export const CookieBannerText = styled.p`
  font-size: ${fontSize.paragraph.xsmall};
  margin: 0 1rem 1.3rem 0;
  line-height: ${lineHeight.xsmall};
`;

export const AcceptLink = styled.p`
  font-size: ${fontSize.link.small};
  font-weight: bold;
  color: ${({ theme }) => theme.colour.blue.dark};
  cursor: pointer;
  :hover {
    opacity: ${textDecoration.opacity};
  }
`;

export const DoNotAcceptLink = styled(AcceptLink)`
  color: ${({ theme }) => theme.colour.grey.medium};
  margin-right: 3rem;
`;

export const LearnMoreLink = styled(Link)`
  margin-left: 0.8rem;
  color: ${({ theme }) => theme.colour.blue.dark};
`;
