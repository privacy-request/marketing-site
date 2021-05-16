import { graphql } from "gatsby";

export const query = graphql`
  fragment TestimonialsData on PrismicTestimonials {
    data {
      testimonial_headline {
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
        job_title {
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
`;
