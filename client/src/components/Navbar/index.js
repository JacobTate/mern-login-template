import React from "react";
import { Navbar, NavLink } from "reactstrap";
function Nav(props) {
  return (
    <Navbar color="primary">
      <NavLink href={"/login"}>Login</NavLink>
    </Navbar>
  );
}
export default Nav;
