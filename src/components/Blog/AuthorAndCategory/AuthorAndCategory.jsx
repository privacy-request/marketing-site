import React from "react";
import { BlogAuthor, BlogDate, BlogCategory } from "../../typography";
import styled from "styled-components";
import {
  Wrapper,
  TextWrapper,
  NameAndDate,
  Divider,
} from "./AuthorAndCategory.styles";
import { navigate } from "gatsby";
import { STATIC_ROUTES } from "../../utils/constants";

const AuthorImage = styled.img`
  cursor: pointer;
`;
const AuthorAndCategory = ({ avatar, authorName, category, date }) => {
  const postDate = new Date(date).toLocaleString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <Wrapper>
      <AuthorImage
        onClick={() => navigate(STATIC_ROUTES.ABOUT)}
        src={avatar.url}
        height={64}
        width={64}
      />
      <TextWrapper>
        <NameAndDate>
          <BlogAuthor to={STATIC_ROUTES.ABOUT}>{authorName}</BlogAuthor>
          {date && (
            <>
              <Divider>—</Divider>
              <BlogDate> {postDate}</BlogDate>
            </>
          )}
        </NameAndDate>
        <BlogCategory>{category.toUpperCase()}</BlogCategory>
      </TextWrapper>
    </Wrapper>
  );
};

export default AuthorAndCategory;
