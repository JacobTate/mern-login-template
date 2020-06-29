import React from "react";
import { Navbar, NavLink } from "reactstrap";
import {logOut} from "../../utils/userLoginCheck";
function Nav(props) {
  sessionStorage.setItem("isLoggedIn", [props.isLoggedIn])
  return (
    <Navbar color="primary">
      
      {props.showHome ? <NavLink href={"/"}>Home</NavLink>: null}
      {props.isLoggedIn ? (
        <button
          onClick={() => {
            logOut();
          }}
        >
          You are logged in click to log out
        </button>
      ) : (
        <NavLink href={"/login"}>Login</NavLink>
      )}
      {props.isLoggedIn ? (
        <NavLink href="/profile">Profile</NavLink>
      ) : null}
    </Navbar>
  );
}
export default Nav;
