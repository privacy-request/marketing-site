import React, { useState } from "react";
import { graphql, navigate, useStaticQuery } from "gatsby";
import styled from "styled-components";
import {
  BookADemoHeadline,
  BookADemoParagraph,
  CallToAction,
} from "./typography";
import { STATIC_ROUTES, SCREEN_SIZES } from "./utils/constants";
import BookADemoLeft from "../../assets/bookADemoLeft.svg";
import BookADemoRight from "../../assets/bookADemoRight.svg";

const Wrapper = styled.section`
  padding: 3rem;
  width: fit-content;
  position: relative;
  margin: 9rem auto 9rem auto;

  @media only screen and (max-width: ${SCREEN_SIZES.TABLET}px) {
    margin-bottom: 5rem;
  }
`;
const MailingListForm = styled.form`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
const EmailInput = styled.input`
  width: 307px;
  height: 48px;
  border-radius: ${({ theme }) => theme.borderRadius.input};
  outline: none;
  border: none;
  margin-right: 1.6rem;
  padding-left: 1.2rem;
  margin-bottom: 1.6rem;
  @media only screen and (max-width: ${SCREEN_SIZES.TABLET}px) {
    width: 100%;
  }
`;

const Box = styled.div`
  background: ${({ theme }) => theme.colour.yellow};
  width: ${({ theme }) => theme.width.bookADemo};
  border-radius: ${({ theme }) => theme.borderRadius.bookADemo};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5.6rem;
  box-sizing: border-box;
  @media only screen and (max-width: ${SCREEN_SIZES.LAPTOP}px) {
    padding: 4rem 2.4rem;
    width: 100%;
    width: fit-content;
  }
  box-shadow: 0px 40px 40px rgba(0, 0, 0, 0.09);
`;

const BookADemoBackgroundLeft = styled(BookADemoLeft)`
  position: absolute;
  left: -150px;
  top: 0;
  mix-blend-mode: saturation;
`;

const BookADemoBackgroundRight = styled(BookADemoRight)`
  position: absolute;
  right: -100px;
  bottom: -50px;
  mix-blend-mode: saturation;
`;

const BookADemo = () => {
  const [email, setEmail] = useState("");
  const data = useStaticQuery(query);
  const {
    emailInputPlaceholder,
    headline,
    paragraph,
    submitBtnText,
  } = data.allPrismicMailingListForm.edges[0].node.data;

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
            placeholder={emailInputPlaceholder.text}
          />
          <CallToAction to={STATIC_ROUTES.CALENDAR} state={{ email }}>
            {submitBtnText.text}
          </CallToAction>
        </MailingListForm>
      </Box>
      <BookADemoBackgroundLeft />
      <BookADemoBackgroundRight />
    </Wrapper>
  );
};

const query = graphql`
  query MailingListFormQuery {
    allPrismicMailingListForm {
      edges {
        node {
          data {
            emailInputPlaceholder: email_input_placeholder {
              text
            }
            headline {
              text
            }
            paragraph {
              text
            }
            submitBtnText: submit_button_text {
              text
            }
          }
        }
      }
    }
  }
`;

export default BookADemo;
