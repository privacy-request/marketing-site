import React from "react";
import styled from "styled-components";
import { SCREEN_SIZES } from "../utils/constants";
import { RichText } from "prismic-reactjs";
import { TableCell } from "../typography";

const Wrapper = styled.table`
  border-collapse: collapse;
  margin-bottom: 1.8rem;
  font-size: 1.8rem;
  table-layout: fixed;
  width: 100%;
  @media only screen and (max-width: ${SCREEN_SIZES.TABLET}px) {
    font-size: 1.4rem;
  }
  @media only screen and (max-width: ${SCREEN_SIZES.MOBILE_LARGE}px) {
    font-size: 1.1rem;
  }
`;

const Row = styled.tr``;

const Head = styled.thead`
  background-color: #f6f6f4;
`;

const Heading = styled.th`
  color: #403b3b;
  border: 1px solid #dbd9d2;
  padding: 2rem;
  vertical-align: top;
  @media only screen and (max-width: ${SCREEN_SIZES.TABLET}px) {
    padding: 1rem;
  }
  @media only screen and (max-width: ${SCREEN_SIZES.MOBILE_LARGE}px) {
    padding: 0.5rem;
  }
`;

const Table = ({ data }) => {
  const headers = Object.keys(data.primary).map(
    (key) => data.primary[key].text
  );
  return (
    <Wrapper>
      <Head>
        {headers.map((header) => (
          <Heading>{header}</Heading>
        ))}
      </Head>
      {data.items.map((row) => (
        <Row>
          {Object.keys(row).map((key) => (
            <TableCell>
              <RichText render={row[key].raw} />
            </TableCell>
          ))}
        </Row>
      ))}
    </Wrapper>
  );
};

export default Table;
