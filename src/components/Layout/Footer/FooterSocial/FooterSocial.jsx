import React from "react";
import { Copyright } from "../../../typography";
import Image from "../../../Image";
import { Wrapper, SocialMedia, SocialMediaLink } from "./FooterSocial.styles";

const FooterSocial = ({ copyright, social_media_links }) => {
  return (
    <Wrapper>
      <Copyright>{copyright.text}</Copyright>
      <SocialMedia>
        {social_media_links.map((link) => (
          <SocialMediaLink
            key={`social-links${link.url.url}`}
            href={link.url.url}
            target="_blank"
            rel="noreferrer"
          >
            <Image image={link.icon} />
          </SocialMediaLink>
        ))}
      </SocialMedia>
    </Wrapper>
  );
};

export default FooterSocial;
