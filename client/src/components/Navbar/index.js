import React from "react";
import { logOut } from "../../utils/userLoginCheck";
import "./index.css";
function Nav(props) {
  sessionStorage.setItem("isLoggedIn", [props.isLoggedIn]);
  return (
    // <nav class="navbar nav ">

    //   {props.showHome ? <a  href={"/"}>Home</a>: null}
    //   {props.isLoggedIn ? (
    //     <button className="btn btn-secondary"
    //       onClick={() => {
    //         logOut();
    //       }}
    //     >
    //       You are logged in click to log out
    //     </button>
    //   ) : (
    //     <a href={"/login"}>Login</a>
    //   )}
    //   {props.isLoggedIn ? (
    //     <a className="navbar-brand" href="/profile">Profile</a>
    //   ) : null}
    // </nav>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <a class="navbar-brand" href="/">
        Login Template
      </a>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          {/* <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Features</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Pricing</a>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
      </li> */}
          {props.isLoggedIn ? (
            <div class="collapse navbar-collapse" id="navbarNav">
              <li className="nav-item active">
                {" "}
                <a
                  className="nav-link"
                  onClick={() => {
                    logOut();
                  }}
                >
                  Logout
                </a>
              </li>
              <li className="nav-item active">
                <a className="nav-link" href="/profile">
                  Profile
                </a>
              </li>
            </div>
          ) : <a className="nav-link" href={"/login"}>Login</a>}
        </ul>
      </div>
    </nav>
  );
}
export default Nav;
