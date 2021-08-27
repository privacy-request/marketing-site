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
  transition: all 0.25s ease;

  &:hover {
    border: 2px solid
      ${({ theme, inverted }) =>
        !inverted ? theme.colour.blue.darker : theme.colour.blue.dark};
    color: white;
    background: ${({ theme, inverted }) =>
      inverted ? theme.colour.blue.dark : theme.colour.blue.darker};
  }
`;

export const Paragraph = styled.p`
  font-size: ${fontSize.paragraph.medium};
  margin-bottom: ${({ theme: { margin } }) => margin.paragraph};
  margin-right: 2rem;
  @media only screen and (max-width: ${SCREEN_SIZES.TABLET}px) {
    font-size: ${fontSize.paragraph.xsmall};
  }
`;

export const Header = styled.h2`
  font-size: ${({ size }) =>
    size ? fontSize.header[size] : fontSize.header.large};

  margin-bottom: 0.8rem;
  @media only screen and (max-width: ${SCREEN_SIZES.TABLET}px) {
    font-size: ${fontSize.header.small};
    line-height: ${lineHeight.medium};
  }
`;

export const Subheader = styled.h3`
  font-size: ${fontSize.header.xsmall};
  padding-bottom: 1.5rem;
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
  height: auto;
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

export const HomepageSubHeadline = styled(Paragraph)`
  @media only screen and (max-width: ${SCREEN_SIZES.TABLET}px) {
    margin-bottom: 3.2rem;
  }
`;

// Customers
export const CustomersHeadline = styled(Paragraph)`
  margin-left: ${({ theme: { margin } }) => margin.homepageSections};
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
  line-height: 2.6rem;
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

//  Legal Page
export const LegalPageTitle = styled.h1`
  font-size: ${fontSize.header.small};
  color: ${({ theme }) => theme.colour.blue.dark};
`;

export const LegalPageNavItem = styled(Link)`
  color: ${({ theme }) => theme.colour.grey.dark};
  font-size: ${fontSize.link.small};
  font-weight: bold;
  line-height: 2.2rem;
  margin-bottom: 0.6rem;
  @media only screen and (max-width: ${SCREEN_SIZES.TABLET}px) {
    margin-right: 1.8rem;
  }
`;

export const LegalPageNavSubItem = styled(LegalPageNavItem)`
  margin-left: 1.5rem;
  font-weight: normal;
  color: ${({ theme }) => theme.colour.grey.medium};
`;

export const LegalPageHeading = styled.h2`
  font-size: ${fontSize.paragraph.large};
  font-weight: bold;
  margin: 4rem 0 1.8rem 0;

  // Offset scroll
  padding-top: 11rem;
  margin-top: -8rem;
`;

export const LegalPageParagraph = styled.p`
  font-size: ${fontSize.paragraph.medium};
  margin-bottom: 2rem;
  white-space: break-spaces;
`;

export const LegalPageListItem = styled.li`
  font-size: ${fontSize.paragraph.medium};
  margin-bottom: 1rem;
`;

export const HyperLink = styled.a`
  color: ${({ theme }) => theme.colour.blue.dark};
`;

// Company Pages
export const CompanyPageTitle = styled.h1`
  color: ${({ theme }) => theme.colour.blue.dark};
  font-size: ${fontSize.header.medium};
  margin-bottom: 0.8rem;
  @media only screen and (max-width: ${SCREEN_SIZES.TABLET}px) {
    margin-bottom: 1.5rem;
  }
`;

export const CompanyPageSubTitle = styled.h2`
  font-size: ${fontSize.header.small};
  font-weight: normal;
  line-height: 43px;
`;

export const CompanyPageParagraph = styled.p`
  font-size: ${fontSize.paragraph.small};
  margin-bottom: 2.5rem;
`;

export const CoreValueTitle = styled.p`
  font-size: ${fontSize.paragraph.large};
  color: ${({ theme }) => theme.colour.blue.dark};
  text-align: center;
  font-weight: bold;
  margin-bottom: 1.2rem;
  @media only screen and (max-width: ${SCREEN_SIZES.LAPTOP}px) {
    margin-bottom: 1.6rem;
  }
`;

export const CoreValueDescription = styled.p`
  font-size: ${fontSize.paragraph.medium};
  text-align: center;
  margin: auto;
`;

export const TeamMemberName = styled.p`
  font-size: ${fontSize.header.xxsmall};
  font-weight: bold;
  color: ${({ theme }) => theme.colour.blue.medium};

  margin-bottom: 0.2rem;
  text-align: center;
`;

export const TeamMemberTitle = styled.p`
  font-size: ${fontSize.header.xxsmall};
  font-weight: bold;
  text-align: center;
`;

// Contact Page
export const SalesCardTitle = styled.h3`
  font-size: ${fontSize.paragraph.large};
  color: ${({ theme }) => theme.colour.blue.dark};
  text-align: center;
  margin-bottom: 1.6rem;
  line-height: 3.1rem;
`;

export const SalesCardParagraph = styled.p`
  font-size: ${fontSize.paragraph.medium};
  line-height: 3.2rem;
  @media only screen and (max-width: ${SCREEN_SIZES.TABLET}px) {
    font-size: ${fontSize.paragraph.small};
    line-height: 2.9rem;
  }
`;

// Slice
export const HeadingWrapper = styled.h2`
  font-size: ${fontSize.paragraph.large};
  font-weight: bold;
  margin: 4rem 0 1.8rem 0;

  // Offset scroll
  padding-top: 11rem;
  margin-top: -8rem;
`;

export const RichTextWrapper = styled.div`
  line-height: 2.6rem;
  p {
    font-size: ${fontSize.paragraph.medium};
    margin-bottom: 2rem;
    white-space: break-spaces;
    img {
      width: 100%;
      margin: 1rem 0rem;
    }
  }
  ul {
    list-style: disc;
    margin-left: 3rem;

    li {
      margin-bottom: 1rem;
      font-size: ${fontSize.paragraph.medium};
    }
    margin-bottom: 2rem;
  }

  ol {
    margin-left: 3rem;
    li {
      margin-bottom: 2rem;
      font-size: ${fontSize.paragraph.medium};
    }
    margin-bottom: 2rem;
  }

  a {
    color: ${({ theme }) => theme.colour.blue.dark};
  }

  h6 {
    font-size: ${fontSize.paragraph.medium};
    margin: 1rem 0 1.8rem 0rem;
  }
  h2 {
    font-size: ${fontSize.paragraph.large};
    margin-bottom: 3rem;
    margin-top: 3rem;
  }

  h3 {
    font-size: ${fontSize.paragraph.medium};
    margin-bottom: 3rem;
  }
`;

export const TableCell = styled.td`
  border: 1px solid #dbd9d2;
  padding: 3.5rem;
  vertical-align: top;
  overflow-wrap: break-word;

  @media only screen and (max-width: ${SCREEN_SIZES.TABLET}px) {
    padding: 1rem;
  }

  p {
    white-space: break-spaces;
  }
  ul {
    list-style: disc;
    margin-left: 3rem;

    li {
      margin-bottom: 1rem;
    }
  }

  a {
    color: ${({ theme }) => theme.colour.blue.dark};
  }
`;

// Book a demo banner
export const BannerHeadline = styled.h4`
  font-size: ${fontSize.paragraph.medium};
  margin-bottom: 0.6rem;
`;

export const BannerDescription = styled.p`
  font-size: ${fontSize.paragraph.xsmall};
`;

// Blog Page
export const BlogTitle = styled.h3`
  font-weight: bold;
  font-size: ${fontSize.paragraph.large};
  line-height: 3.1rem;
  margin-bottom: 1.4rem;
  cursor: pointer;
  @media only screen and (max-width: ${SCREEN_SIZES.TABLET}px) {
    font-size: ${fontSize.paragraph.small};
    margin-bottom: 1.2rem;
  }
`;

export const BlogDescription = styled.p`
  font-size: ${fontSize.paragraph.small};
  line-height: 2rem;
  @media only screen and (max-width: ${SCREEN_SIZES.TABLET}px) {
    font-size: ${fontSize.paragraph.xsmall};
  }
`;

export const BlogReadMore = styled(Link)`
  font-size: ${fontSize.paragraph.small};
  color: ${({ theme }) => theme.colour.blue.dark};
  @media only screen and (max-width: ${SCREEN_SIZES.TABLET}px) {
    font-size: ${fontSize.paragraph.xsmall};
  }
`;

export const BlogAuthor = styled(Link)`
  font-size: ${fontSize.paragraph.small};
  color: ${({ theme }) => theme.colour.blue.dark};
  @media only screen and (max-width: ${SCREEN_SIZES.TABLET}px) {
    font-size: ${fontSize.paragraph.xsmall};
  }
`;

export const BlogDate = styled.p`
  font-size: ${fontSize.paragraph.small};
  @media only screen and (max-width: ${SCREEN_SIZES.TABLET}px) {
    font-size: ${fontSize.paragraph.xsmall};
  }
`;

export const BlogCategory = styled.p`
  font-size: ${fontSize.header.xxsmall};
  font-weight: bold;
  color: ${({ theme }) => theme.colour.blue.medium};
  background: ${({ theme }) => theme.colour.blue.light};

  width: fit-content;
  padding: 0.6rem 0.8rem;
  border-radius: 6px;

  @media only screen and (max-width: ${SCREEN_SIZES.TABLET}px) {
    font-size: ${fontSize.link.xsmall};
  }
`;

// Blog Post
export const BlogPostTitle = styled.h1`
  font-size: ${fontSize.header.small};
  max-width: 70rem;
  margin-bottom: 1rem;
`;

export const BlogPostDate = styled.p`
  font-size: ${fontSize.paragraph.xxsmall};
  margin-bottom: 2.2rem;
`;
