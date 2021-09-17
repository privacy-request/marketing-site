import styled from "styled-components";
import AboutContentEllipse from "../../../assets/aboutContentEllipse.svg";

export const Wrapper = styled.div`
  background: linear-gradient(
    92.13deg,
    #009dff 3.73%,
    #6bcbff 60.51%,
    #8fd8ff 86.59%
  );
  height: 80rem;
  position: relative;
`;

export const Ellipse = styled(AboutContentEllipse)`
  position: absolute;
  top: 68rem;
  margin: auto;
  left: 0;
  right: 0;
  @media only screen and (min-width: 1441px) {
    transform: scale(1.6);
    top: 78rem;
  }
  @media only screen and (min-width: 2440px) {
    transform: scale(2.2);
  }
`;
