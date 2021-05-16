import React, { createRef, useEffect } from "react";
import lottie from "lottie-web";
import animation from "../../../animations/homepageHero.json";
import styled from "styled-components";
import { SCREEN_SIZES } from "../../utils/constants";

const HeroAnimation = () => {
  let animationContainer = createRef();
  const AnimationContainer = styled.div`
    @media only screen and (min-width: ${SCREEN_SIZES.LAPTOP}px) {
      margin-right: 3rem;
    }
  `;

  useEffect(() => {
    const anim = lottie.loadAnimation({
      container: animationContainer.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: animation,
    });
    return () => anim.destroy();
  }, [animationContainer]);

  return (
    <AnimationContainer
      className="animation-container"
      ref={animationContainer}
    />
  );
};

export default HeroAnimation;
