import React from "react";
import styled from "styled-components";
import FooterNav from "./FooterNav";
import FooterPrivacyCenter from "./FooterPrivacyCenter";
import FooterSocial from "./FooterSocial";
import { STATIC_ROUTES, SCREEN_SIZES } from "../utils/constants";

const FooterWrapper = styled.footer`
  max-width: ${({ theme }) => theme.width.footer};
  margin: auto;
  padding: 0 3rem;
`;

const Line = styled.div`
  width: 100%;
  height: 2px;
  background: ${({ theme }) => theme.colour.grey.medium};
  margin: 5rem 0rem;
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterNav />
      <Line />
      <FooterPrivacyCenter />
      <FooterSocial />
    </FooterWrapper>
  );
};

export default Footer;
