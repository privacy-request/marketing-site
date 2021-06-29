import React, { useRef } from "react";
import SectionText from "../../SectionText";
import Illustration from "../../Illustration/Illustration";
import { Section, SiteWrapper, Wrapper } from "./Section.styles";
import useIntersection from "../../utils/useIntersection";
import { Transition } from "react-transition-group";
import styled from "styled-components";

const Fade = styled.div`
  transition: 0.75s;
  opacity: ${({ state }) => (state === "entered" ? 1 : 0)};
  display: ${({ state }) => (state === "exited" ? "none" : "block")};
`;

const Product = ({ index, section }) => {
  const ref = useRef();
  const inViewport = useIntersection(ref, "-100px");
  return (
    <Section ref={ref} index={index} inViewport={inViewport}>
      <SiteWrapper>
        <Wrapper>
          <SectionText {...section.primary} callToActionText="Learn More" />
          <Transition in={inViewport} timeout={250}>
            {(state) => (
              <Fade state={state}>
                <Illustration {...section.primary} />
              </Fade>
            )}
          </Transition>
        </Wrapper>
      </SiteWrapper>
    </Section>
  );
};
export default Product;
