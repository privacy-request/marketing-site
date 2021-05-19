import React, { useState } from "react";
import { navigate } from "gatsby";
import {
  BookADemoHeadline,
  BookADemoParagraph,
  CallToAction,
} from "../typography";
import { STATIC_ROUTES } from "../utils/constants";
import {
  Wrapper,
  MailingListForm,
  EmailInput,
  Box,
  BookADemoBackgroundLeft,
  BookADemoBackgroundRight,
} from "./BookADemo.styles";

const BookADemo = ({
  email_input_placeholder,
  headline,
  paragraph,
  submit_button_text,
}) => {
  const [email, setEmail] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    navigate("/apply", { state: { email } });
  };

  return (
    <Wrapper>
      <Box>
        <BookADemoHeadline>{headline.text}</BookADemoHeadline>
        <BookADemoParagraph>{paragraph.text}</BookADemoParagraph>
        <MailingListForm onSubmit={onSubmit}>
          <EmailInput
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={email_input_placeholder.text}
          />
          <CallToAction to={STATIC_ROUTES.CALENDAR} state={{ email }}>
            {submit_button_text.text}
          </CallToAction>
        </MailingListForm>
      </Box>
      <BookADemoBackgroundLeft />
      <BookADemoBackgroundRight />
    </Wrapper>
  );
};

export default BookADemo;
