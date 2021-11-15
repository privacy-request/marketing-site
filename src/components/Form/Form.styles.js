import styled from "styled-components";
import { CallToAction } from "../typography";
import { SCREEN_SIZES } from "../utils/constants";
import RichTextSection from "../Slices/RichTextSection";
import Input from "../Input";

export const DisclaimerText = styled(RichTextSection)`
  margin-top: -1.6rem;
`;

export const DoubleInputRow = styled.div`
  display: flex;
  width: 100%;
  div:first-child {
    margin-right: 3rem;
  }

  @media only screen and (max-width: ${SCREEN_SIZES.TABLET}px) {
    flex-direction: column;
  }
`;

export const FormWrapper = styled.form`
  margin: 6.4rem 6.4rem 2.8rem 6.4rem;

  @media only screen and (max-width: ${SCREEN_SIZES.MOBILE_LARGE}px) {
    margin: 3.2rem 2.4rem;
  }
`;

export const TextArea = styled(Input)`
  height: 10.8rem;
`;

export const SubmitButton = styled(CallToAction)`
  margin-bottom: 3.2rem;
  width: 100%;
  cursor: pointer;
`;
