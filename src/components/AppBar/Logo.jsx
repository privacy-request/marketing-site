import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import { STATIC_ROUTES } from "../utils/constants";
import Image from "../Image";

const LogoIcon = styled(Image)`
  margin-right: 1.4rem;
  padding-bottom: 2px;
`;

const LogoText = styled(Image)`
  height: 2.4rem;
`;

const Logo = ({ logoIcon, logoText }) => (
  <Link to={STATIC_ROUTES.HOME}>
    <LogoIcon image={logoIcon} />
    <LogoText image={logoText} />
  </Link>
);

export default Logo;
