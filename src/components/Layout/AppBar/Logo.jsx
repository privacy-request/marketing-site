import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import { STATIC_ROUTES } from "../../utils/constants";
import Image from "../../Image";

const LogoIcon = styled(Image)`
  padding-bottom: 2px;
  height: 3.8rem;
  width: 3.8rem;
`;

const LogoText = styled(Image)`
  height: 2rem;
`;

const LinkWrapper = styled(Link)`
  display: flex;
  align-items: center;
`;

const Logo = ({ logoIcon, logoText }) => (
  <LinkWrapper to={STATIC_ROUTES.HOME}>
    <LogoIcon image={logoIcon} />
    <LogoText image={logoText} />
  </LinkWrapper>
);

export default Logo;
