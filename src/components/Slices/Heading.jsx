import React from "react";
import { HeadingWrapper } from "../typography";
import { createKeyFromStr } from "../utils/helpers";

const Heading = ({
  data: {
    primary: {
      heading: { text },
    },
  },
}) => {
  return <HeadingWrapper id={createKeyFromStr(text)}>{text}</HeadingWrapper>;
};

export default Heading;
