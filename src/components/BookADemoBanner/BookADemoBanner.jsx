import React, { useState } from "react";
import { navigate } from "gatsby";
import styled from "styled-components";
import { BannerHeadline, BannerDescription, CallToAction } from "../typography";
import { STATIC_ROUTES } from "../utils/constants";
import {
  Wrapper,
  MailingListForm,
  EmailInput,
  BannerBox,
} from "./BookADemoBanner.styles";

const Text = styled.div`
  margin-right: 5rem;
`;
const BookADemoBanner = ({
  email_input_placeholder,
  headline,
  paragraph,
  submit_button_text,
}) => {
  const [email, setEmail] = useState("");
  const state = { email, redirectFromBookADemoForm: true };

  const onSubmit = (e) => {
    e.preventDefault();
    navigate("/apply", { state });
  };

  return (
    <Wrapper>
      <BannerBox>
        <Text>
          <BannerHeadline>{headline.text}</BannerHeadline>
          <BannerDescription>{paragraph.text}</BannerDescription>
        </Text>
        <MailingListForm onSubmit={onSubmit}>
          <EmailInput
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={email_input_placeholder.text}
          />
          <CallToAction to={STATIC_ROUTES.CALENDAR} state={state}>
            {submit_button_text.text}
          </CallToAction>
        </MailingListForm>
      </BannerBox>
    </Wrapper>
  );
};

export default BookADemoBanner;
