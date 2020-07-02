import React, { Component } from "react";
import { logOut } from "../../utils/userLoginCheck";
import "./index.css";
import {sessionStorageCheck} from "../../utils/userLoginCheck"
console.log(sessionStorageCheck().isLoggedIn);

//sessionStorage.setItem("isLoggedIn", [props.isLoggedIn]);
class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
    };
  }
  componentDidMount(){
    if(sessionStorageCheck().isLoggedIn === "true"){
      this.setState({
        isLoggedIn: true
      });  
    }
  }
  render() {
    return (
    //   <div>
    //     <button onClick={() => {console.log(this.state)}}>sadffsda</button>
    //  </div>
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


<div>
     <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand" href="/">
          Login Template
        </a>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            {this.state.isLoggedIn ? (
              <div class="collapse navbar-collapse" id="navbarNav">
                <li className="nav-item active">
                  <button
                    className="btn btn-secondary"
                    onClick={() => {
                      logOut();
                    }}
                  >
                    Logout
                  </button>
                </li>
                <li className="nav-item active">
                  <a className="nav-link" href="/profile">
                    Profile
                  </a>
                </li>
              </div>
            ) : (
              <a className="nav-link" href={"/login"}>
                Login
              </a>
            )}
          </ul>
        </div>
      </nav>
      </div>
     );
  }
 }
export default Nav;
