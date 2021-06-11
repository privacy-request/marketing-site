import React from "react";
import styled from "styled-components";
import Input from "../../Input";
import { CallToAction } from "../../typography";
import { SCREEN_SIZES } from "../../utils/constants";

const NameRow = styled.div`
  display: flex;
  width: 100%;
  div:first-child {
    margin-right: 3rem;
  }

  @media only screen and (max-width: ${SCREEN_SIZES.TABLET}px) {
    flex-direction: column;
  }
`;

const Form = styled.form``;

const TextArea = styled(Input)`
  height: 20.8rem;
`;

const SubmitButton = styled(CallToAction)`
  width: 100%;
  cursor: pointer;
`;

const ContactForm = ({
  first_name_label,
  last_name_label,
  email_label,
  phone_label,
  job_title_company_label,
  message_label,
  submit_button,
}) => {
  return (
    <Form
      name="contact"
      method="post"
      netlify-honeypot="bot-field"
      data-netlify="true"
      action="/contact/thank-you"
    >
      <NameRow>
        <Input name="firstName" label={first_name_label} />
        <Input name="lastName" label={last_name_label} />
      </NameRow>
      <Input name="email" label={email_label} />
      <Input name="jobTitle" label={job_title_company_label} />
      <Input name="phone" label={phone_label} />
      <TextArea
        textArea
        name="message"
        type="text-area"
        label={message_label}
      />
      <input type="hidden" name="bot-field" />
      <input type="hidden" name="form-name" value="contact" />
      <SubmitButton as="button" type="submit">
        {submit_button.text}
      </SubmitButton>
    </Form>
  );
};

export default ContactForm;
