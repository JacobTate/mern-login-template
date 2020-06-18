import React from "react";
import { Navbar, NavLink } from "reactstrap";
function Nav(props) {
  function logOut() {
    sessionStorage.removeItem("LoginTemplateUser");
    sessionStorage.removeItem("LoginTemplatePassword");
    window.location.reload(false);
  }
  return (
    <Navbar color="primary">
      {props.isLoggedIn ? (
        <button onClick={() => {logOut()}}>You are logged in click to log out</button>
      ) : (
        <NavLink href={"/login"}>Login</NavLink>
      )}
      <NavLink href="/profile">Profile</NavLink>
    </Navbar>
  );
}
export default Nav;
