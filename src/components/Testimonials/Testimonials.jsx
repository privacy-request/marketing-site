import React, { useState } from "react";
import { TestimonialsHeadline } from "../typography";
import isMobileScreen from "../utils/isMobileScreen";
import {
  Wrapper,
  FocusedTestimonial,
  NextTestimonial,
  Carousel,
  LeftArrowBtn,
  RightArrowBtn,
} from "./Testimonials.styles";
import { HomepageContainer } from "../Homepage/Homepage.styles";

const Testimonials = ({ testimonial_headline, testimonials }) => {
  const [focusedTestimonialIndex, setFocusedTestimonialIndex] = useState(0);
  const isMobile = isMobileScreen();
  const focusedTestimonial = testimonials[focusedTestimonialIndex];
  const nextTestimonial = testimonials[focusedTestimonialIndex + 1];
  return (
    <HomepageContainer>
      <Wrapper>
        <TestimonialsHeadline>{testimonial_headline.text}</TestimonialsHeadline>
        <Carousel>
          {!isMobile && (
            <LeftArrowBtn
              onClick={() =>
                !!testimonials[focusedTestimonialIndex - 1] &&
                setFocusedTestimonialIndex(focusedTestimonialIndex - 1)
              }
            />
          )}
          {focusedTestimonial && (
            <FocusedTestimonial testimonial={focusedTestimonial} />
          )}
          {!isMobile && (
            <RightArrowBtn
              onClick={() =>
                !!testimonials[focusedTestimonialIndex + 1] &&
                setFocusedTestimonialIndex(focusedTestimonialIndex + 1)
              }
            />
          )}
          {nextTestimonial && !isMobile && (
            <NextTestimonial testimonial={nextTestimonial} />
          )}
        </Carousel>
      </Wrapper>
    </HomepageContainer>
  );
};

export default Testimonials;
