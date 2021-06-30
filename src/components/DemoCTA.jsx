import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import styled from "styled-components";
import { CallToAction } from "./typography";
import { STATIC_ROUTES } from "./utils/constants";
import Image from "./Image";

const Icon = styled(Image)`
  margin-right: 1.2rem;
`;

const DemoCTA = ({ withIcon }) => {
  const data = useStaticQuery(query);
  const { icon, text } = data.allPrismicDemoCta.edges[0].node.data;
  return (
    <CallToAction to={STATIC_ROUTES.CALENDAR}>
      {withIcon && <Icon image={icon} />}
      {text.text}
    </CallToAction>
  );
};

const query = graphql`
  query DemoCTAQuery {
    allPrismicDemoCta {
      edges {
        node {
          data {
            icon {
              alt
              url
              dimensions {
                height
                width
              }
            }
            text {
              text
            }
          }
        }
      }
    }
  }
`;

export default DemoCTA;
