import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { SCREEN_SIZES } from "../utils/constants";
import { HomepageHeadline } from "../typography";

const Cursor = styled.span`
  margin-left: -1.6rem;
  @media only screen and (max-width: ${SCREEN_SIZES.TABLET}px) {
    margin-left: -0.6rem;
  }
`;

const Headline = ({ prefix, typewriter }) => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [blink, setBlink] = useState(true);
  const [reverse, setReverse] = useState(false);

  const typewriterWords = typewriter.map((word) => word.word.text);

  // typeWriter
  useEffect(() => {
    if (index === typewriterWords.length) return;
    if (
      subIndex === typewriterWords[index].length + 1 &&
      index !== typewriterWords.length - 1 &&
      !reverse
    ) {
      setReverse(true);
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);

      setIndex((prev) => prev + 1);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, Math.max(reverse ? 75 : subIndex === typewriterWords[index].length ? 700 : 75));

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse]);

  // blinker
  useEffect(() => {
    const timeout2 = setTimeout(() => {
      setBlink((prev) => !prev);
    }, 500);
    return () => clearTimeout(timeout2);
  }, [blink]);
  console.log(typewriterWords.length > 0);
  return (
    <>
      <HomepageHeadline>
        {prefix.text}
        <br />
        {typewriterWords.length > 0 &&
          ` ${typewriterWords[index].substring(0, subIndex)} `}
        <Cursor>{`${blink ? "|" : " "}`}</Cursor>
      </HomepageHeadline>
    </>
  );
};

export default Headline;
