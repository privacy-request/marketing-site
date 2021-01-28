import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import { STATIC_ROUTES } from "../utils/constants";

const LogoIcon = styled.img`
  margin-right: 1.4rem;
`;

const LogoText = styled.img``;

const Logo = ({ logoIconUrl, logoTextUrl }) => (
  <Link to={STATIC_ROUTES.HOME}>
    <LogoIcon src={logoIconUrl} />
    <LogoText src={logoTextUrl} />
  </Link>
);

export default Logo;
