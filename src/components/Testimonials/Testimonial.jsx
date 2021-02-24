import React from "react";
import styled from "styled-components";
import { TestimonialParagraph, NameAndJob, Company } from "../typography";
import Image from "../Image";
import { SCREEN_SIZES } from "../utils/constants";

const TestimonialWrapper = styled.div`
  width: ${({ theme }) => theme.width.sectionColumLg};
  display: flex;
  align-items: center;
  z-index: 2;
  @media only screen and (max-width: ${SCREEN_SIZES.LAPTOP}px) {
    width: 100%;
  }
`;

const Content = styled.div`
  margin-left: 4rem;
`;

const Testimonial = ({
  testimonial: { avatar, company, jobTitle, name, testimonial },
  className,
}) => {
  return (
    <TestimonialWrapper className={className}>
      <Image image={avatar} />
      <Content>
        <TestimonialParagraph>{testimonial.text}</TestimonialParagraph>
        <NameAndJob>
          {name.text}, {jobTitle.text} <Company>- {company.text}</Company>
        </NameAndJob>
      </Content>
    </TestimonialWrapper>
  );
};

export default Testimonial;
