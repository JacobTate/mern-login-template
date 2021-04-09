import React, { Component } from "react";
import {
  sessionStorageCheck,
  getUserInfo,
  changePassword,
  changeAccountType,
} from "../../utils/userLoginCheck";
const userCreds = sessionStorageCheck();
const userInfo = new getUserInfo(userCreds.email, userCreds.password);
userInfo.getUserData();
class ProfilePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: {},
      currentPass: "",
      newPass: "",
    };
  }
  componentDidMount() {
    if (userCreds.isLoggedIn == "false") {
      alert("Must be sigined in to view profile page");
      window.location.replace("/");
    }
    setTimeout(() => {
      const userData = userInfo.showUserData();
      this.setState({
       userData: userData
      });
    }, 600);
  }
  handleChange = (event) => {
    if (event.target.name === "currentPass") {
      this.setState({ currentPass: event.target.value });
    } else if (event.target.name === "newPass") {
      this.setState({ newPass: event.target.value });
    }
  };
  formSubmit = (event) => {
    if (this.state.currentPass === this.state.userData.password) {
      changePassword(
        this.state.currentPass,
        this.state.newPass,
        this.state.userData._id
      );
    } else {
      alert("Incorrect password");
    }
  };
  render() {
    return (
      <div>
        <ul>
          <li>{this.state.userData.firstName}</li>
          <li>{this.state.userData.lastName}</li>
          <li>{this.state.userData.email}</li>
          <li>{this.state.userData.isAdmen ? "You are an admin" : "You are not an admin"}</li>
        </ul>
        <div className="jumbotron">
          <form
            onSubmit={(event) => {
              this.formSubmit(event);
            }}
          >
            <input
              onChange={(event) => {
                this.handleChange(event);
              }}
              type="password"
              name="currentPass"
              placeholder="Current password"
              required
            ></input>
            <input
              onChange={(event) => {
                this.handleChange(event);
              }}
              type="password"
              name="newPass"
              placeholder="New password"
              required
            ></input>
            <button type="submit" className="btn btn-primary">
              Change
            </button>
          </form>
          {this.state.userData.isAdmen ? null :   <button
            onClick={() => {
             changeAccountType(this.state.userData._id);
                        }}
            className="btn btn-primary"
          >
            Change to admin account
          </button>}

        
        </div>
      </div>
    );
  }
}
export default ProfilePage;
