import React, { useState, useEffect } from "react";
import { navigate } from "gatsby";
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

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

const Form = ({ title, pageRoute, actionRoute, inputs, preFill }) => {
  const [values, setValues] = useState();
  const [validation, setValidation] = useState();

  useEffect(() => {
    const valuesObj = {};
    const validationObj = {};
    inputs.forEach((input) => {
      const type = input.slice_type;
      if (type === "two_text_inputs") {
        const { name_1, name_2, required_1, required_2 } = input.primary;
        valuesObj[name_1.text] = preFill[name_1.text] || "";
        valuesObj[name_2.text] = preFill[name_2.text] || "";
        validationObj[name_1.text] = {
          required: required_1,
          warning: false,
        };
        validationObj[name_2.text] = {
          required: required_2,
          warning: false,
        };
      } else if (
        type === "text_input" ||
        type === "text_area" ||
        type === "checkbox"
      ) {
        const { name, required } = input.primary;
        valuesObj[name.text] = preFill[name.text] || "";

        validationObj[name.text] = {
          required: required,
          warning: false,
        };
      }

      setValidation(validationObj);
      setValues(valuesObj);
    });
  }, [inputs]);

  const onSubmit = (e) => {
    const validationObj = { ...validation };
    let preventSubmit = false;
    Object.keys(values).forEach((name) => {
      if (!values[name] && validation[name].required) {
        validationObj[name].warning = true;
        preventSubmit = true;
      }
    });

    if (!preventSubmit) {
      console.log({ "form-name": `${pageRoute}`, ...values });
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": pageRoute, ...values }),
      }).then(navigate(actionRoute));
    } else {
      setValidation(validationObj);
    }
    e.preventDefault();
  };

  const onChange = ({ value, name }) => {
    const valuesObj = { ...values };
    const validationObj = { ...validation };
    valuesObj[name] = value;
    validationObj[name].warning = false;
    setValues(valuesObj);
    setValidation(validationObj);
  };

  return (
    <FormWrapper
      onSubmit={onSubmit}
      name={pageRoute}
      data-netlify="true"
      data-netlify-honeypot="bot-field"
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
                  warning={validation[input.primary.name.text].warning}
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
                    warning={validation[input.primary.name_1.text].warning}
                  />
                  <Input
                    value={values[input.primary.name_2.text].value}
                    onChange={onChange}
                    name={input.primary.name_2.text}
                    label={input.primary.label_2.text}
                    warning={validation[input.primary.name_2.text].warning}
                  />
                </DoubleInputRow>
              );
            case "checkbox":
              return (
                <Checkbox
                  key={index}
                  name={input.primary.name.text}
                  label={input.primary.label.text}
                  warning={validation[input.primary.name.text].warning}
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
                  value={values[input.primary.name.text].value}
                  key={index}
                  textArea
                  onChange={onChange}
                  name={input.primary.name.text}
                  type="text-area"
                  label={input.primary.label.text}
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
