import React from "react";
import styled from "styled-components";
import Input from "../Input";
import { CallToAction, OptInFormTitle } from "../typography";
import { SCREEN_SIZES } from "../utils/constants";

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

const Form = styled.form`
  margin: 6.4rem;
  width: 100%;
`;

const SubmitButton = styled(CallToAction)`
  width: 100%;
  cursor: pointer;
`;

const OptInForm = ({ title, submit }) => {
  return (
    <Form
      name="optIn"
      method="post"
      netlify-honeypot="bot-field"
      data-netlify="true"
      action="/contact/thank-you"
    >
      <OptInFormTitle>{title}</OptInFormTitle>
      <NameRow>
        <Input name="firstName" label="First name" />
        <Input name="lastName" label="Last name" />
      </NameRow>
      <Input name="email" label="Email address" />
      <Input name="jobTitle" label="Job title / Company" />
      <Input name="phone" label="Phone number" />
      <input type="hidden" name="bot-field" />
      <input type="hidden" name="form-name" value="test" />
      <SubmitButton as="button" type="submit">
        {submit}
      </SubmitButton>
    </Form>
  );
};

export default OptInForm;
