import styled from "styled-components";
import { SCREEN_SIZES } from "../utils/constants";

export const Wrapper = styled.section`
  padding: 0 3rem;
  width: fit-content;
  position: relative;
  margin: 4rem auto 4rem auto;

  @media only screen and (max-width: ${SCREEN_SIZES.TABLET}px) {
    margin-bottom: 5rem;
  }
`;
export const MailingListForm = styled.form`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
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
  }
`;

export const BannerBox = styled.div`
  background: ${({ theme }) => theme.colour.yellow};
  width: ${({ theme }) => theme.width.bookADemo};
  border-radius: ${({ theme }) => theme.borderRadius.bookADemo};
  display: flex;
  align-items: center;
  padding: 2.7rem;
  box-sizing: border-box;
  @media only screen and (max-width: ${SCREEN_SIZES.LAPTOP}px) {
    padding: 4rem 2.4rem;
    width: 100%;
    width: fit-content;
  }
  box-shadow: 0px 40px 40px rgba(0, 0, 0, 0.09);
`;
