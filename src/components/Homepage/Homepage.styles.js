import styled from "styled-components";

export const HomepageContainer = styled.div`
  margin: auto;
  max-width: ${({ theme: { width } }) => width.site};
  padding: 0 ${({ theme: { padding } }) => padding.site};
`;
