import styled from "styled-components";
import { SCREEN_SIZES } from "../utils/constants";

export const Wrapper = styled.section`
  width: 100%;
  position: relative;
  margin: 4rem auto 4rem auto;

  @media only screen and (max-width: ${SCREEN_SIZES.TABLET}px) {
    margin-bottom: 5rem;
  }
`;
export const MailingListForm = styled.form`
  display: flex;
  justify-content: center;
  width: 100%;
  @media only screen and (max-width: ${SCREEN_SIZES.TABLET}px) {
    flex-direction: column;
    align-items: center;
  }
`;
export const EmailInput = styled.input`
  width: 259px;
  height: 48px;
  border-radius: ${({ theme }) => theme.borderRadius.input};
  outline: none;
  border: none;
  font-size: 1.8rem;
  margin-right: 1.6rem;
  padding-left: 1.2rem;
  @media only screen and (max-width: ${SCREEN_SIZES.TABLET}px) {
    width: 100%;
    margin: 2.7rem 0rem 1.7rem 0;
  }
`;

export const BannerBox = styled.div`
  margin: auto;
  background: ${({ theme }) => theme.colour.yellow};
  border-radius: ${({ theme }) => theme.borderRadius.bookADemo};
  display: flex;
  padding: 2.7rem;
  box-sizing: border-box;
  @media only screen and (max-width: ${SCREEN_SIZES.TABLET}px) {
    flex-direction: column;
    padding: 2.7;
  }
  box-shadow: 0px 40px 40px rgba(0, 0, 0, 0.09);
`;

export const Text = styled.div`
  margin-right: 1rem;
  width: 100%;
`;
