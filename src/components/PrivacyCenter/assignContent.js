import React from "react";
import { createKeyFromStr } from "../utils/helpers";
import {
  LegalPageParagraph,
  LegalPageListItem,
  HyperLink,
} from "../typography";
import styled from "styled-components";

const UL = styled.ul`
  list-style: disc;
  margin-left: 3rem;
`;

const groupListItems = (content) => {
  const groupedContent = content.reduce((value, { type, text, spans }) => {
    type === "list-item"
      ? value[value.length - 1].type === "list-item"
        ? value[value.length - 1].value.push(text)
        : value.push({ type, value: [text], spans })
      : value.push({ type, value: text, spans });
    return value;
  }, []);
  return groupedContent;
};

const addSpans = ({ value, spans }) => {
  const sortedSpans = [...spans].sort((a, b) => (a.start < b.start ? 1 : -1));
  const valueWithSpan = sortedSpans.reduce(
    (formattedValue, { start, end, type, data }, index) => {
      const firstPass = index === 0;
      const valueToSlice = !firstPass ? formattedValue[0] : formattedValue;
      const startStr = valueToSlice.slice(0, start);
      const endStr = valueToSlice.slice(end, valueToSlice.length);
      const textToWrap = valueToSlice.slice(start, end);
      const wrappedText =
        type === "hyperlink" ? (
          <HyperLink href={data.url} target="_blank">
            {textToWrap}
          </HyperLink>
        ) : (
          <b>{textToWrap}</b>
        );

      if (!firstPass) {
        formattedValue.shift();
        formattedValue.unshift(startStr, wrappedText, endStr);
        return formattedValue;
      }
      return [startStr, wrappedText, endStr];
    },
    value
  );
  return valueWithSpan;
};

const assignComponent = (content) => {
  const { type, value, spans } = content;
  const valueWithSpan = spans.length > 0 ? addSpans({ value, spans }) : value;
  switch (type) {
    case "paragraph":
      return (
        <LegalPageParagraph key={createKeyFromStr(value)}>
          {valueWithSpan}
        </LegalPageParagraph>
      );
    case "list-item":
      return (
        <UL key={`ul-${createKeyFromStr(value[0])}`}>
          {valueWithSpan.map((listItem) => (
            <LegalPageListItem key={createKeyFromStr(listItem)}>
              {listItem}
            </LegalPageListItem>
          ))}
        </UL>
      );
  }
};

const appendToC = (tocObj, groupedContent) => {
  const groupedContentCopy = [...groupedContent];
  if (tocObj && groupedContentCopy[0].type === "paragraph") {
    const { tocNumber, tocSubNumber, subheading } = tocObj;
    groupedContentCopy[0].value = `${tocNumber}.${tocSubNumber} ${subheading.text}. ${groupedContent[0].value}`;
  }
  return groupedContentCopy;
};

const assignContent = (content, tocObj) => {
  // Group list items
  const groupedContent = groupListItems(content);

  // Append ToC values to first paragraph
  const groupedContentWithToC = appendToC(tocObj, groupedContent);

  // Wrap content in appropriate compoponent
  const assignedContent = groupedContentWithToC.map((content) =>
    assignComponent(content)
  );

  return assignedContent;
};

export default assignContent;
