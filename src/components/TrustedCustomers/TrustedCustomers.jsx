import React from "react";
import { graphql } from "gatsby";
import { CustomersHeadline } from "../typography";
import {
  TrustedCustomersWrapper,
  Logo,
  Logos,
  LogoContainer,
} from "./TrustedCustomers.styles";

export const query = graphql`
  fragment TrustedCustomersData on PrismicTrustedCustomers {
    data {
      display_section_flag
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
`;

const TrustedCustomers = ({
  display_section_flag,
  headline,
  logos,
  centerText,
}) => {
  return (
    <>
      {display_section_flag ? (
        <TrustedCustomersWrapper centerText={centerText}>
          <CustomersHeadline>{headline.text}</CustomersHeadline>
          <Logos>
            {logos.map((logo) => (
              <LogoContainer key={`logo-${logo.logo.url}`}>
                <Logo src={logo.logo.url} />
              </LogoContainer>
            ))}
          </Logos>
        </TrustedCustomersWrapper>
      ) : null}
    </>
  );
};

export default TrustedCustomers;
