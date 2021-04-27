import React from "react";

import { LegalPageParagraph, LegalPageListItem } from "../typography";
import styled from "styled-components";
const UL = styled.ul`
  list-style: disc;
  margin-left: 3rem;
`;

const groupContent = (content, item) => {
  const { type, text } = item;
  switch (type) {
    case "paragraph":
      content.push({ type, value: text });
      break;
    case "list-item":
      content[content.length - 1].type === "list-item"
        ? content[content.length - 1].value.push(text)
        : content.push({ type, value: [text] });
      break;
    default:
      content.push({ type, value: text });
      break;
  }
  return content;
};

const assignComponent = ({
  content,
  subheading,
  tocNumber,
  tocSubNumber,
  index,
}) => {
  const { type, value } = content;
  switch (type) {
    case "paragraph":
      return index === 0 && !!subheading.text ? (
        <LegalPageParagraph key={`lp-p-${tocNumber}-${tocSubNumber}-${index}`}>
          {`${tocNumber}.${tocSubNumber} ${subheading.text}. ${value}`}
        </LegalPageParagraph>
      ) : (
        <LegalPageParagraph key={`lp-p-${tocNumber}-${tocSubNumber}-${index}`}>
          {value}
        </LegalPageParagraph>
      );
    case "list-item":
      return (
        <UL key={`lp-l-${tocNumber}-${tocSubNumber}`}>
          {value.map((listItem, listIndex) => (
            <LegalPageListItem
              key={`lp-l-${tocNumber}-li-${listIndex}-${tocSubNumber}-${index}`}
            >
              {listItem}
            </LegalPageListItem>
          ))}
        </UL>
      );
  }
};

const assignContent = ({ content, subheading, tocNumber, tocSubNumber }) => {
  const groupedContent = content.reduce(groupContent, []);
  const assignedContent = groupedContent.map((content, index) =>
    assignComponent({ content, subheading, tocNumber, tocSubNumber, index })
  );
  return assignedContent;
};

export default assignContent;
