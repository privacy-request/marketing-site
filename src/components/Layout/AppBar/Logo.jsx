import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import { STATIC_ROUTES } from "../../utils/constants";
import Image from "../../Image";

const LogoIcon = styled(Image)`
  margin-right: 1.4rem;
  padding-bottom: 2px;
`;

const LogoText = styled(Image)`
  height: 2.4rem;
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
