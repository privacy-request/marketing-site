import React from "react";
import styled from "styled-components";
import Input from "../Input";
import Checkbox from "../Checkbox";
import { CallToAction, OptInFormTitle } from "../typography";
import { SCREEN_SIZES } from "../utils/constants";
import RichTextSection from "../Slices/RichTextSection";

const DisclaimerText = styled(RichTextSection)`
  margin-top: -1.6rem;
`;

const DoubleInputRow = styled.div`
  display: flex;
  width: 100%;
  div:first-child {
    margin-right: 3rem;
  }

  @media only screen and (max-width: ${SCREEN_SIZES.TABLET}px) {
    flex-direction: column;
  }
`;

const FormWrapper = styled.form`
  margin: 6.4rem 6.4rem 2.8rem 6.4rem;
  width: 100%;
  @media only screen and (max-width: ${SCREEN_SIZES.MOBILE_LARGE}px) {
    margin: 3.2rem 2.4rem;
  }
`;

const SubmitButton = styled(CallToAction)`
  margin-bottom: 3.2rem;
  width: 100%;
  cursor: pointer;
`;

const Form = ({ title, submit, pageRoute, actionRoute, inputs }) => {
  return (
    <FormWrapper
      name={pageRoute}
      method="post"
      netlify-honeypot="bot-field"
      data-netlify="true"
      action={actionRoute}
    >
      <input type="hidden" name="bot-field" />
      <input type="hidden" name="form-name" value={pageRoute} />
      <OptInFormTitle>{title}</OptInFormTitle>
      {inputs.map((input, index) => {
        if (!input) return null;
        switch (input.slice_type) {
          case "text_input":
            return (
              <Input
                key={index}
                name={input.primary.name.text}
                label={input.primary.label.text}
              />
            );
          case "two_text_inputs":
            return (
              <DoubleInputRow key={index}>
                <Input
                  name={input.primary.name_1.text}
                  label={input.primary.label_1.text}
                />
                <Input
                  name={input.primary.name_2.text}
                  label={input.primary.label_2.text}
                />
              </DoubleInputRow>
            );
          case "checkbox":
            return (
              <Checkbox
                key={index}
                name={input.primary.name.text}
                label={input.primary.label.text}
              />
            );
          case "rich_text_section":
            return (
              <DisclaimerText
                paragraphFontSize={"xsmall"}
                key={index}
                data={input.primary.content.richText}
              />
            );
          case "submit_button":
            return (
              <SubmitButton as="button" type="submit">
                {input.primary.text.text}
              </SubmitButton>
            );
          default:
            return null;
        }
      })}
    </FormWrapper>
  );
};

export default Form;
