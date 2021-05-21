import React from "react";
import styled from "styled-components";
import TeamMember from "./TeamMember";
import { SCREEN_SIZES } from "../../utils/constants";

const Wrapper = styled.div`
  margin-bottom: auto;
  display: flex;
  margin-bottom: 15rem;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  background: white;
  margin: auto;
  padding: 0 10rem 8rem 10rem;
  @media only screen and (max-width: ${SCREEN_SIZES.TABLET}px) {
    padding: 0 3rem;
    justify-content: space-around;
  }
`;

const TeamMembers = ({ teamMembers, linkedInLogo, twitterLogo }) => {
  return (
    <Wrapper>
      {teamMembers.map((teamMember) => (
        <TeamMember {...{ teamMember, linkedInLogo, twitterLogo }} />
      ))}
    </Wrapper>
  );
};

export default TeamMembers;
