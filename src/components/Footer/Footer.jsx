import React from "react";
import styled from "styled-components";
import FooterNav from "./FooterNav";
import FooterPrivacyCenter from "./FooterPrivacyCenter";
import FooterSocial from "./FooterSocial";

const FooterWrapper = styled.footer`
  max-width: ${({ theme }) => theme.width.section};
  margin: auto;
  padding: 0 3rem;
`;

const Line = styled.div`
  width: 100%;
  height: 2px;
  background: ${({ theme }) => theme.colour.grey.light};
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
