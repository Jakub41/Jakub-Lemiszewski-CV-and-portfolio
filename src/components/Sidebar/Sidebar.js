import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  SideNavItems,
  SideNavLink
} from "carbon-components-react/lib/components/UIShell";
import { User32, Code32, Portfolio32, Education32, Keyboard32 } from "@carbon/icons-react";

import { StyledSideNav } from "./styles";

const items = [
  { name: "Me", path: "/" },
  { name: "Projects", path: "/projects" },
  { name: "Portfolio", path: "/portfolio" },
  { name: "Work", path: "/work" },
  { name: "Education", path: "/education" }
];

const Sidebar = () => {
  const location = useLocation();

  return (
    <StyledSideNav
      isFixedNav
      expanded
      isChildOfHeader={false}
      aria-label="Side navigation"
    >
      <SideNavItems>
        {items.map(i => (
          <SideNavLink className="nav-icon"
            isActive={
              location.pathname === "/" && i.path === "/"
                ? true
                : location.pathname === i.path
            }
            element={Link}
            to={i.path}
            key={i.name}
            renderIcon={
              i.name === "Me"
                ? User32
                : i.name === "Projects"
                ? Code32
                : i.name === "Work"
                ? Portfolio32
                : i.name === "Portfolio"
                ? Keyboard32
                : Education32
            }
          >
            {i.name}
          </SideNavLink>
        ))}
      </SideNavItems>
    </StyledSideNav>
  );
};

export default Sidebar;
