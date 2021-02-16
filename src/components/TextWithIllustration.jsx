import React from "react";
import styled from "styled-components";
import isMobileScreen from "./utils/isMobileScreen";
import { Header, Subheader, Paragraph, CallToAction } from "./typography";
import Illustration from "./Illustration";

const TextContainer = styled.div`
  max-width: ${({ theme: { width } }) => width.sectionColum};
  margin-bottom: 4.5rem;
  z-index: 1;
`;

const TextWithIllustration = ({
  heading,
  subheading,
  paragraph,
  icon,
  route,
  desktopIllustration,
  verticalMargin,
  horizontalMargin,
  verticalOffset,
  horizontalOffset,
  visualHeight,
  visualWidth,
  mobileIllustration,
  mobileVerticalMargin,
  mobileHorizontalMargin,
  mobileVerticalOffset,
  mobileHorizontalOffset,
  mobileVisualHeight,
  mobileVisualWidth,
  isMobile,
}) => {
  const mobileProps = {
    illustration: mobileIllustration,
    verticalMargin: mobileVerticalMargin,
    horizontalMargin: mobileHorizontalMargin,
    verticalOffset: mobileVerticalOffset,
    horizontalOffset: mobileHorizontalOffset,
    visualHeight: mobileVisualHeight,
    visualWidth: mobileVisualWidth,
  };

  const desktopProps = {
    illustration: desktopIllustration,
    verticalMargin,
    horizontalMargin,
    verticalOffset,
    horizontalOffset,
    visualHeight,
    visualWidth,
  };

  return (
    <>
      <TextContainer>
        <Header>{heading.text}</Header>
        <Subheader>{subheading.text}</Subheader>
        <Paragraph>{paragraph.text}</Paragraph>
        <CallToAction to={route}>Learn More</CallToAction>
      </TextContainer>
      <Illustration {...(isMobileScreen() ? mobileProps : desktopProps)} />
    </>
  );
};

export default TextWithIllustration;