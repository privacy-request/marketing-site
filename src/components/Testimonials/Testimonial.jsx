import React from "react";
import { TestimonialParagraph, NameAndJob, Company } from "../typography";
import Image from "../Image";
import { Wrapper, Content } from "./Testimonial.styles";

const Testimonial = ({
  testimonial: { avatar, company, job_title, name, testimonial },
  className,
}) => {
  return (
    <Wrapper className={className}>
      <Image image={avatar} />
      <Content>
        <TestimonialParagraph>{testimonial.text}</TestimonialParagraph>
        <NameAndJob>
          {name.text}, {job_title.text} <Company>- {company.text}</Company>
        </NameAndJob>
      </Content>
    </Wrapper>
  );
};

export default Testimonial;
