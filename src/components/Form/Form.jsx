import React, { useState, useEffect } from "react";
import Input from "../Input";
import Checkbox from "../Checkbox";
import {
  DisclaimerText,
  DoubleInputRow,
  FormWrapper,
  TextArea,
  SubmitButton,
} from "./Form.styles";
import { OptInFormTitle } from "../typography";

const Form = ({ title, pageRoute, actionRoute, inputs, preFill }) => {
  const [values, setValues] = useState();
  useEffect(() => {
    const valuesObj = {};
    inputs.forEach((input) => {
      const type = input.slice_type;
      if (type === "two_text_inputs") {
        const { name_1, name_2, required_1, required_2 } = input.primary;
        valuesObj[name_1.text] = {
          required: required_1,
          value: preFill[name_1.text] || "",
          warning: false,
        };
        valuesObj[name_2.text] = {
          value: preFill[name_2.text] || "",
          required: required_2,
          warning: false,
        };
      } else if (
        type === "text_input" ||
        type === "text_area" ||
        type === "checkbox"
      ) {
        const { name, required } = input.primary;
        valuesObj[name.text] = {
          value: preFill[name.text] || "",
          required: required,
          warning: false,
        };
      }

      setValues(valuesObj);
    });
  }, []);

  const onSubmit = (e) => {
    const valuesObj = { ...values };
    let preventSubmit = false;
    Object.keys(values).forEach((name) => {
      if (!values[name].value && values[name].required) {
        valuesObj[name].warning = true;
        preventSubmit = true;
      }
    });

    setValues(valuesObj);
    preventSubmit && e.preventDefault();
  };

  const onChange = ({ value, name }) => {
    const valuesObj = { ...values };
    valuesObj[name].value = value;
    valuesObj[name].warning = false;
    setValues(valuesObj);
  };
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
      {values &&
        inputs.map((input, index) => {
          if (!input) return null;
          switch (input.slice_type) {
            case "text_input":
              return (
                <Input
                  key={index}
                  value={values[input.primary.name.text].value}
                  name={input.primary.name.text}
                  label={input.primary.label.text}
                  warning={values[input.primary.name.text].warning}
                  onChange={onChange}
                />
              );
            case "two_text_inputs":
              return (
                <DoubleInputRow key={index}>
                  <Input
                    value={values[input.primary.name_1.text].value}
                    onChange={onChange}
                    name={input.primary.name_1.text}
                    label={input.primary.label_1.text}
                    warning={values[input.primary.name_1.text].warning}
                  />
                  <Input
                    value={values[input.primary.name_2.text].value}
                    onChange={onChange}
                    name={input.primary.name_2.text}
                    label={input.primary.label_2.text}
                    warning={values[input.primary.name_2.text].warning}
                  />
                </DoubleInputRow>
              );
            case "checkbox":
              return (
                <Checkbox
                  key={index}
                  name={input.primary.name.text}
                  label={input.primary.label.text}
                  required={input.primary.required}
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
            case "text_area":
              return (
                <TextArea
                  key={index}
                  textArea
                  name={input.primary.name.text}
                  type="text-area"
                  label={input.primary.label.text}
                  required={input.primary.required}
                />
              );
            case "submit_button":
              return (
                <SubmitButton key={index} as="button" type="submit">
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

Form.defaultProps = {
  preFill: {},
};

export default Form;
