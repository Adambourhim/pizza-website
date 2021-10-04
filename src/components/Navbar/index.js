import React from "react";
import { Nav } from "./NavbarElement";
import { NavLink, NavIcon, Bars } from "./NavbarElement";

export default function Navbar({ toggle }) {
  return (
    <div>
      <Nav>
        <NavLink to="/">Pizza</NavLink>
        <NavIcon onClick={toggle}>
          <p>Menu</p>
          <Bars />
        </NavIcon>
      </Nav>
    </div>
  );
}
