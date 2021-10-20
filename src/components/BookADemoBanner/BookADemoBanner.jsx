import React, { useState } from "react";
import { navigate, useStaticQuery, graphql } from "gatsby";
import { BannerHeadline, BannerDescription, CallToAction } from "../typography";
import { STATIC_ROUTES } from "../utils/constants";
import {
  Wrapper,
  MailingListForm,
  EmailInput,
  BannerBox,
  Text,
} from "./BookADemoBanner.styles";
import { useMergePrismicPreviewData } from "gatsby-plugin-prismic-previews";

const BookADemoBanner = () => {
  const [email, setEmail] = useState("");
  const state = { email, redirectFromBookADemoForm: true };

  const staticData = useStaticQuery(graphql`
    query BookADemoBannerQuery {
      prismicBookADemoBanner {
        _previewable
        data {
          email_input_placeholder {
            text
          }
          headline {
            text
          }
          paragraph {
            text
          }
          submit_button_text {
            text
          }
        }
      }
    }
  `);

  const { data } = useMergePrismicPreviewData(staticData);
  const { email_input_placeholder, headline, paragraph, submit_button_text } =
    data.prismicBookADemoBanner.data;
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
