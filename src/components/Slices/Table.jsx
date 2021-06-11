import React from "react";
import styled from "styled-components";
import { SCREEN_SIZES } from "../utils/constants";

const Wrapper = styled.table`
  border: 1px solid black;
  border-collapse: collapse;
  margin-bottom: 1.8rem;
  font-size: 1.8rem;
  @media only screen and (max-width: ${SCREEN_SIZES.TABLET}px) {
    font-size: 1.1rem;
  }
`;

const Row = styled.tr`
  border: 1px solid black;
`;

const Heading = styled.th`
  border: 1px solid black;
  padding: 0.4rem 1rem 0.4rem 1rem;
  vertical-align: top;
  @media only screen and (max-width: ${SCREEN_SIZES.TABLET}px) {
    padding: 0.2rem;
  }
`;

const Cell = styled.td`
  border: 1px solid black;
  padding: 0.4rem 1rem 0.4rem 1rem;
  vertical-align: top;
  @media only screen and (max-width: ${SCREEN_SIZES.TABLET}px) {
    padding: 0.2rem;
  }
`;

const Table = ({ data }) => {
  const headers = Object.keys(data.primary).map(
    (key) => data.primary[key].text
  );
  return (
    <Wrapper>
      <Row>
        {headers.map((header) => (
          <Heading>{header}</Heading>
        ))}
      </Row>
      {data.items.map((row) => (
        <Row>
          {Object.keys(row).map((key) => (
            <Cell>{row[key].text}</Cell>
          ))}
        </Row>
      ))}
    </Wrapper>
  );
};

export default Table;
