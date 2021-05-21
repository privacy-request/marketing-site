import React from "react";
import Image from "../../Image";
import { TeamMemberName, TeamMemberTitle } from "../../typography";
import {
  Wrapper,
  Avatar,
  SocialMedia,
  SocialMediaLink,
} from "./TeamMember.styles";

const TeamMember = ({ teamMember, linkedInLogo, twitterLogo }) => {
  return (
    <Wrapper>
      <Avatar image={teamMember.avatar} />
      <TeamMemberName>{teamMember.name.text}</TeamMemberName>
      <TeamMemberTitle>{teamMember.title.text}</TeamMemberTitle>
      <SocialMedia>
        {teamMember.linkedin.url && (
          <SocialMediaLink
            href={teamMember.linkedin.url}
            target="_blank"
            rel="noreferrer"
          >
            <Image image={linkedInLogo} />
          </SocialMediaLink>
        )}
        {teamMember.twitter.url && (
          <SocialMediaLink
            href={teamMember.twitter.url}
            target="_blank"
            rel="noreferrer"
          >
            <Image image={twitterLogo} />
          </SocialMediaLink>
        )}
      </SocialMedia>
    </Wrapper>
  );
};

export default TeamMember;
