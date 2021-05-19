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
  homepage_nav,
  product_pages_nav,
  product_pages_sub_items,
}) => {
  return (
    <Wrapper>
      <FooterNav
        {...{
          homepage_nav,
          product_pages_nav,
          product_pages_sub_items,
          contact,
          email,
          phone,
        }}
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
