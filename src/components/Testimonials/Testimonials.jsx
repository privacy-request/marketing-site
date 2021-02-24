import React, { useState } from "react";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";
import { TestimonialsHeadline } from "../typography";
import { SCREEN_SIZES } from "../utils/constants";
import isMobileScreen from "../utils/isMobileScreen";
import Testimonial from "./Testimonial";
import LeftArrow from "../../../assets/leftArrow.svg";
import RightArrow from "../../../assets/rightArrow.svg";

const TestimonialsWrapper = styled.section`
  max-width: ${({ theme: { width } }) => width.section};
  margin-left: auto;

  @media only screen and (max-width: 1374px) {
    margin-left: 10rem;
  }
  @media only screen and (max-width: ${SCREEN_SIZES.LAPTOP}px) {
    margin-left: 0rem;
  }
  @media only screen and (max-width: ${SCREEN_SIZES.LAPTOP_LARGE}px) {
    padding: ${({ theme }) => theme.padding.site};
  }
`;

const FocusedTestimonial = styled(Testimonial)``;

const NextTestimonial = styled(Testimonial)`
  opacity: 0.2;
  position: absolute;
  right: -90rem;
`;

const SiteWrapper = styled.div`
  max-width: ${({ theme: { width } }) => width.site};
  margin: auto;
`;

const Carousel = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: fit-content;
`;

const LeftArrowBtn = styled(LeftArrow)`
  position: absolute;
  left: -10rem;
  cursor: pointer;
`;

const RightArrowBtn = styled(RightArrow)`
  position: absolute;
  right: -10rem;
  cursor: pointer;
`;

const Testimonials = () => {
  const [focusedTestimonialIndex, setFocusedTestimonialIndex] = useState(0);
  const data = useStaticQuery(query);
  const isMobile = isMobileScreen();

  const {
    headline,
    testimonials,
  } = data.allPrismicTestimonials.edges[0].node.data;

  const focusedTestimonial = testimonials[focusedTestimonialIndex];
  const nextTestimonial = testimonials[focusedTestimonialIndex + 1];
  return (
    <SiteWrapper>
      <TestimonialsWrapper>
        <TestimonialsHeadline>{headline.text}</TestimonialsHeadline>
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
      </TestimonialsWrapper>
    </SiteWrapper>
  );
};

const query = graphql`
  query TestimonialsQuery {
    allPrismicTestimonials {
      edges {
        node {
          data {
            headline: testimonial_headline {
              text
            }
            testimonials {
              avatar {
                url
                alt
                dimensions {
                  height
                  width
                }
              }
              company {
                text
              }
              jobTitle: job_title {
                text
              }
              name {
                text
              }
              testimonial {
                text
              }
            }
          }
        }
      }
    }
  }
`;

export default Testimonials;
