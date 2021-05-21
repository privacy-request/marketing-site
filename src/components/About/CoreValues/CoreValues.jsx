import React, { useState } from "react";
import isMobileScreen from "../../utils/isMobileScreen";
import CoreValue from "./CoreValue";
import Ellipses from "./Ellipses";
import {
  Wrapper,
  ArrowBtnAndValue,
  LeftArrowBtn,
  RightArrowBtn,
  Filler,
} from "./CoreValues.styles";

const CoreValues = ({ coreValues }) => {
  const [focusedCoreValueIndex, setFocusedCoreValueIndex] = useState(0);
  const isMobile = isMobileScreen();

  const focusedCoreValue = coreValues[focusedCoreValueIndex];

  const displayLeftArrow = !isMobile && focusedCoreValueIndex !== 0;
  const displayRightArrow =
    !isMobile && focusedCoreValueIndex + 1 < coreValues.length;

  const HandleWrapperClick = () => {
    if (isMobile) {
      setFocusedCoreValueIndex(
        coreValues[focusedCoreValueIndex + 1] ? focusedCoreValueIndex + 1 : 0
      );
    }
  };

  return (
    <Wrapper onClick={HandleWrapperClick}>
      <ArrowBtnAndValue>
        {displayLeftArrow ? (
          <LeftArrowBtn
            onClick={() =>
              !!coreValues[focusedCoreValueIndex - 1] &&
              setFocusedCoreValueIndex(focusedCoreValueIndex - 1)
            }
          />
        ) : (
          <Filler />
        )}
        <CoreValue coreValue={focusedCoreValue} />
        {displayRightArrow ? (
          <RightArrowBtn
            onClick={() =>
              !!coreValues[focusedCoreValueIndex + 1] &&
              setFocusedCoreValueIndex(focusedCoreValueIndex + 1)
            }
          />
        ) : (
          <Filler />
        )}
      </ArrowBtnAndValue>
      <Ellipses
        {...{ coreValues, focusedCoreValueIndex, setFocusedCoreValueIndex }}
      />
    </Wrapper>
  );
};

export default CoreValues;
