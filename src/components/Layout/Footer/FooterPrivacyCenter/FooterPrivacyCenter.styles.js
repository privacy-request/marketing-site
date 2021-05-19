import { SCREEN_SIZES } from "../../../utils/constants";
import styled from "styled-components";
import Image from "../../../Image";

export const PrivacyCenterIcon = styled(Image)`
  margin-right: 1rem;
  margin-bottom: 0.9rem;
`;

export const IconAndTitle = styled.div`
  display: flex;
  align-items: center;
  margin-right: 3.3rem;
  margin-bottom: 2rem;
  height: 4rem;
  @media only screen and (max-width: ${SCREEN_SIZES.TABLET}px) {
    margin-right: 0rem;
    margin-bottom: 0.6rem;
    height: 2.6rem;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  @media only screen and (max-width: ${SCREEN_SIZES.TABLET}px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const PrivacyCenterList = styled.ul`
  margin-top: 0.6rem;
`;
