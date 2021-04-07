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
  margin-bottom: 2.6rem;
`;

const Logos = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
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
  margin: 1.2rem 2.6rem;
`;

const CustomersHeadline = styled(Paragraph)`
  margin-left: ${({ theme: { margin } }) => margin.homepageSections};
`;

const TrustedCustomers = ({ centerText }) => {
  const data = useStaticQuery(query);

  const {
    logos,
    headline,
    displayFlag,
  } = data.trustedCutomers.edges[0].node.data;
  return (
    <>
      {displayFlag ? (
        <TrustedCustomersWrapper centerText={centerText}>
          <CustomersHeadline>{headline.text}</CustomersHeadline>
          <Logos>
            {logos.map((logo) => (
              <Logo key={`logo-${logo.logo.url}`} src={logo.logo.url} />
            ))}
          </Logos>
        </TrustedCustomersWrapper>
      ) : null}
    </>
  );
};

const query = graphql`
  query TrustedCustomersQuery {
    trustedCutomers: allPrismicTrustedCustomers {
      edges {
        node {
          data {
            displayFlag: display_section_flag
            headline {
              text
            }
            logos {
              logo {
                dimensions {
                  height
                  width
                }
                url
              }
            }
          }
        }
      }
    }
  }
`;

export default TrustedCustomers;
