import React from "react";
import { BlogAuthor, BlogDate, BlogCategory } from "../../typography";
import Image from "../../Image";
import {
  Wrapper,
  TextWrapper,
  NameAndDate,
  Divider,
} from "./AuthorAndCategory.styles";
import { STATIC_ROUTES } from "../../utils/constants";

const AuthorAndCategory = ({ avatar, authorName, category, date }) => {
  const postDate = new Date(date).toLocaleString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <Wrapper>
      <Image image={avatar} height={64} width={64} />
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
