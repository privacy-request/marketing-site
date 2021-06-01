import React from "react";
import styled from "styled-components";
import Input from "../../Input";

const NameRow = styled.div``;
const Form = styled.form``;
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
    <Form>
      <NameRow>
        <Input name="firstName" label={first_name_label} />
        <Input name="lastName" label={last_name_label} />
      </NameRow>
      <Input name="email" label={email_label} />
      <Input name="jobTitle" label={job_title_company_label} />
      <Input name="phone" label={phone_label} />
    </Form>
  );
};

export default ContactForm;
