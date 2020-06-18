import React, { Component } from "react";
import axios from "axios";
import { sessionStorageCheck, getUserInfo } from "../../utils/userLoginCheck";
class ProfilePage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {}

  testFunction = () => {
    const userCreds = sessionStorageCheck();
//     console.log(userCreds);
//    const userInfo = getUserInfo(userCreds.email, userCreds.password);
//    console.log(userInfo);
const userInfo = new getUserInfo(userCreds.email, userCreds.password);
userInfo.getUserData()
console.log(userInfo.getUserData());

// return(
//     <div>
//         <getUserInfo 
//         email={userCreds.email}
//         password={userCreds.password}
//         />
//     </div>
// );
  };
  render() {
    return (
      <div>
        <button onClick={() => {this.testFunction()}}>test</button>
      </div>
    );
  }
}
export default ProfilePage;
