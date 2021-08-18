import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { CallToAction, DesktopNavItem } from "../../../typography";
import TooltipMenu from "./TooltipMenu";

const NavLink = styled(Link)`
  margin-right: ${({ theme: { margin } }) => margin.navItemDesktop};
`;

const NavList = styled.ul`
  display: flex;
  align-items: center;
`;

const NavDesktop = ({ items, path }) => {
  return (
    <nav>
      <NavList>
        {items.map((item, index) => {
          switch (item.slice_type) {
            case "navigation_item":
              return (
                <DesktopNavItem key={`navDesktopItem-${index}`}>
                  <NavLink to={item.primary.route.text}>
                    {item.primary.text.text}
                  </NavLink>
                </DesktopNavItem>
              );
            case "navigation_dropdown":
              return (
                <TooltipMenu
                  key={`tooltipMenu-${index}`}
                  title={item.primary.text.text}
                  items={item.items}
                  path={path}
                />
              );
            case "call_to_action":
              return (
                <li key={`callToAction-${index}`}>
                  <CallToAction
                    inverted={item.primary.inverted ? "true" : null}
                    to={item.primary.route.text}
                  >
                    {item.primary.text.text}
                  </CallToAction>
                </li>
              );
            default:
              return null;
          }
        })}
      </NavList>
    </nav>
  );
};

export default NavDesktop;
