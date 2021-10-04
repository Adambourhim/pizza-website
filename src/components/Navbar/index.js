import React from "react";
import { Nav } from "./NavbarElement";
import { NavLink, NavIcon, Bars } from "./NavbarElement";

export default function Navbar() {
  return (
    <div>
      <Nav>
        <NavLink to="/">Pizza</NavLink>
        <NavIcon>
          <p>Menu</p>
          <Bars />
        </NavIcon>
      </Nav>
    </div>
  );
}
