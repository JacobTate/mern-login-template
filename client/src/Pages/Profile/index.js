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
      userFName: "",
      userLName: "",
      userEmail: "",
      userPass: "",
      userId: "",
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
        userFName: userData.firstName,
        userLName: userData.lastName,
        userEmail: userData.email,
        userPass: userData.password,
        userId: userData._id,
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
    if (this.state.currentPass === this.state.userPass) {
      changePassword(
        this.state.currentPass,
        this.state.newPass,
        this.state.userId
      );
    } else {
      alert("Incorrect password");
    }
  };
  render() {
    return (
      <div>
        <ul>
          <li>{this.state.userFName}</li>
          <li>{this.state.userLName}</li>
          <li>{this.state.userEmail}</li>
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
          <button onClick={() => {changeAccountType(this.state.userId)}} className="btn btn-primary">Change to admen account</button>
        </div>
      </div>
    );
  }
}
export default ProfilePage;
