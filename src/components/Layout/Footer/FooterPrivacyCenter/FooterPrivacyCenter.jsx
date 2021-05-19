import React from "react";
import { Link } from "gatsby";
import { PrivacyCenterTitle, PrivacyCenterNavItem } from "../../../typography";
import {
  PrivacyCenterIcon,
  IconAndTitle,
  Wrapper,
  PrivacyCenterList,
} from "./FooterPrivacyCenter.styles";

const FooterPrivacyCenter = ({
  privacy_center,
  privacy_center_icon,
  privacy_center_links,
}) => {
  return (
    <Wrapper>
      <IconAndTitle>
        <PrivacyCenterIcon image={privacy_center_icon} />
        <PrivacyCenterTitle>{privacy_center.text}</PrivacyCenterTitle>
      </IconAndTitle>
      <PrivacyCenterList>
        {privacy_center_links.map((link) => (
          <PrivacyCenterNavItem key={`footer-pc-nav-${link.route.text}`}>
            <Link to={link.route.text}>{link.text.text}</Link>
          </PrivacyCenterNavItem>
        ))}
      </PrivacyCenterList>
    </Wrapper>
  );
};

export default FooterPrivacyCenter;
