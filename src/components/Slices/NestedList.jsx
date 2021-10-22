import React from "react";
import { RichText } from "prismic-reactjs";
import styled from "styled-components";

const Wrapper = styled.div`
  a {
    color: ${({ theme }) => theme.colour.blue.dark};
  }
  ul {
    list-style: disc;
    margin-left: 3rem;

    li {
      font-size: ${({ theme }) => theme.fontSize.paragraph.medium};
      margin: 1rem 0rem;
    }
    ul {
      list-style: circle;
    }
    ol {
      list-style: lower-alpha;
    }
  }

  ol {
    margin-left: 3rem;
    li {
      margin: 1rem 0rem;
      font-size: ${({ theme }) => theme.fontSize.paragraph.medium};
    }
    ul {
      list-style: circle;
    }
    ol {
      list-style: lower-alpha;
    }
  }
`;

const List = styled.ol``;

const NestedList = ({ items, type }) => {
  return (
    <Wrapper>
      <List as={type === "ordered_list" ? "ol" : "ul"}>
        {items.map((item) => (
          <li>
            {item.list_item.text}
            {<RichText render={item.nested_list.raw} />}
          </li>
        ))}
      </List>
    </Wrapper>
  );
};

export default NestedList;
