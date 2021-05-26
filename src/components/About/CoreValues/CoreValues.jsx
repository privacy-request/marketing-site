import React, { useState, useEffect } from "react";
import isMobileScreen from "../../utils/isMobileScreen";
import CoreValue from "./CoreValue";
import Ellipses from "./Ellipses";
import {
  Wrapper,
  ArrowBtnAndValue,
  LeftArrowBtn,
  RightArrowBtn,
} from "./CoreValues.styles";
import { useSwipeable } from "react-swipeable";

const CoreValues = ({ coreValues, rotateSpeed }) => {
  const [focusedCoreValueIndex, setFocusedCoreValueIndex] = useState(0);

  // auto rotate core Values
  useEffect(() => {
    const id = setTimeout(() => {
      setFocusedCoreValueIndex(
        coreValues[focusedCoreValueIndex + 1] ? focusedCoreValueIndex + 1 : 0
      );
    }, rotateSpeed);
    return () => clearTimeout(id);
  }, [focusedCoreValueIndex]);

  const swipeHandlers = useSwipeable({
    onSwiped: ({ dir }) => {
      if (dir === "Left") nextValue();
      else if (dir === "Right") previousValue();
    },
  });

  const nextValue = () => {
    setFocusedCoreValueIndex(
      coreValues[focusedCoreValueIndex + 1] ? focusedCoreValueIndex + 1 : 0
    );
  };

  const previousValue = () => {
    setFocusedCoreValueIndex(
      coreValues[focusedCoreValueIndex - 1]
        ? focusedCoreValueIndex - 1
        : coreValues.length - 1
    );
  };

  const isMobile = isMobileScreen();
  const focusedCoreValue = coreValues[focusedCoreValueIndex];

  return (
    <Wrapper>
      <ArrowBtnAndValue>
        {!isMobile && <LeftArrowBtn onClick={previousValue} />}
        <CoreValue swipeHandlers={swipeHandlers} coreValue={focusedCoreValue} />
        {!isMobile && <RightArrowBtn onClick={nextValue} />}
      </ArrowBtnAndValue>
      <Ellipses
        {...{ coreValues, focusedCoreValueIndex, setFocusedCoreValueIndex }}
      />
    </Wrapper>
  );
};

export default CoreValues;
