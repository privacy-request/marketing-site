import React from "react";
import SectionText from "../../SectionText";
import Illustration from "../../Illustration/Illustration";
import { Section, SiteWrapper, Wrapper } from "./Section.styles";

const Product = ({ index, section }) => {
  return (
    <Section index={index}>
      <SiteWrapper>
        <Wrapper>
          <SectionText {...section.primary} callToActionText="Learn More" />
          <Illustration {...section.primary} />
        </Wrapper>
      </SiteWrapper>
    </Section>
  );
};
export default Product;
