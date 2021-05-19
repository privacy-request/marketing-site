import styled from "styled-components";

export const Wrapper = styled.footer`
  max-width: ${({ theme }) => theme.width.section};
  margin: auto;
  padding: 0 3rem;
`;

export const Line = styled.div`
  width: 100%;
  height: 2px;
  background: ${({ theme }) => theme.colour.grey.light};
  margin: 4.6rem 0rem;
`;
