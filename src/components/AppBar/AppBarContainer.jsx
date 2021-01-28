import styled from "styled-components";
import { SCREEN_SIZES } from "../utils/constants";

const AppBarContainer = styled.div`
  height: ${({ theme }) => theme.dimensions.app_bar_height};
  max-width: ${({ theme }) => theme.dimensions.site_max_width};
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 ${({ theme }) => theme.spacing.page_horizontal};
  @media only screen and (max-width: ${SCREEN_SIZES.TABLET}px) {
    height: ${({ theme }) => theme.dimensions.app_bar_height_mobile};
  }
`;

export default AppBarContainer;
