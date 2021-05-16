import React from "react";
import styled from "styled-components";
import isMobileScreen from "../../utils/isMobileScreen";
import Background from "../Background";
import Section from "./Section";

const Wrapper = styled.div`
  position: relative;
  z-index: 0;
`;

const Products = ({ productSections }) => {
  const isMobile = isMobileScreen();
  return (
    <Wrapper>
      {!isMobile && <Background />}
      {productSections.map((section, index) => (
        <Section
          index={index}
          key={index}
          section={section}
          isMobile={isMobile}
        />
      ))}
    </Wrapper>
  );
};

export default Products;
