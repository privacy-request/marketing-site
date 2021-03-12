import React from "react";
import styled from "styled-components";
import isMobileScreen from "./utils/isMobileScreen";
import { Header, Subheader, Paragraph, CallToAction } from "./typography";
import Image from "./Image";

const TextContainer = styled.div`
  max-width: ${({ theme: { width } }) => width.sectionColum};
  z-index: 1;
  position: relative;
`;

const Icon = styled(Image)`
  position: absolute;
  right: calc(100% + 4rem);
  top: 0.7rem;
`;

const SectionText = ({
  heading,
  subheading,
  paragraph,
  icon,
  callToActionText,
  route,
  size,
  className,
}) => {
  const isMobile = isMobileScreen();

  return (
    <TextContainer className={className}>
      {!isMobile && icon && <Icon image={icon} />}
      <Header size={size ? size : "large"}>{heading.text}</Header>
      <Subheader>{subheading.text}</Subheader>
      <Paragraph>{paragraph.text}</Paragraph>
      <CallToAction to={route}>{callToActionText}</CallToAction>
    </TextContainer>
  );
};

export default SectionText;
