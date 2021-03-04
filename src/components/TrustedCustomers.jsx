import React from "react";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";
import { Paragraph } from "./typography";
import { SCREEN_SIZES } from "./utils/constants";

const TrustedCustomersWrapper = styled.section`
  text-align: ${({ centerText }) => (centerText ? "center" : "left")};
  @media only screen and (max-width: ${SCREEN_SIZES.TABLET}px) {
    text-align: center;
  }
  max-width: ${({ theme: { width } }) => width.section};
  margin-left: auto;
  margin-bottom: 6.2rem;
`;

const Logos = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-top: ${({ theme: { margin } }) => margin.customerLogos.desktop};
  @media only screen and (max-width: ${SCREEN_SIZES.TABLET}px) {
    margin-top: ${({ theme: { margin } }) => margin.customerLogos.mobile};
  }
`;

const Logo = styled.img`
  height: fit-content;
  max-width: 13.6rem;
  max-height: 4.4rem;
  margin: 1.2rem;
`;

const CustomersHeadline = styled(Paragraph)`
  margin-left: ${({ theme: { margin } }) => margin.homepageSections};
`;

const TrustedCustomers = ({ centerText }) => {
  const data = useStaticQuery(query);
  const { customerLogos, customerHeadline } = data.homepage.edges[0].node.data;
  return (
    <TrustedCustomersWrapper centerText={centerText}>
      <CustomersHeadline>{customerHeadline.text}</CustomersHeadline>
      <Logos>
        {customerLogos.map((logo) => (
          <Logo key={`logo-${logo.logo.url}`} src={logo.logo.url} />
        ))}
      </Logos>
    </TrustedCustomersWrapper>
  );
};

const query = graphql`
  query TrustedCustomersQuery {
    homepage: allPrismicHomepage {
      edges {
        node {
          data {
            customerLogos: customer_logos {
              logo {
                url
                alt
              }
            }
            customerHeadline: customers_headline {
              text
            }
          }
        }
      }
    }
  }
`;

export default TrustedCustomers;
