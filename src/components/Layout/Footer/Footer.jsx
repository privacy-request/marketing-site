import React from "react";
import FooterNav from "./FooterNav/FooterNav";
import FooterPrivacyCenter from "./FooterPrivacyCenter/FooterPrivacyCenter";
import FooterSocial from "./FooterSocial/FooterSocial";
import { Wrapper, Line } from "./Footer.styles";

const Footer = ({
  contact,
  email,
  phone,
  privacy_center,
  privacy_center_icon,
  privacy_center_links,
  social_media_links,
  copyright,
  navData,
}) => {
  return (
    <Wrapper>
      <FooterNav
        {...{
          contact,
          email,
          phone,
        }}
        {...navData}
      />
      <Line />
      <FooterPrivacyCenter
        {...{ privacy_center, privacy_center_icon, privacy_center_links }}
      />
      <FooterSocial {...{ social_media_links, copyright }} />
    </Wrapper>
  );
};

export default Footer;
