import React, { Component } from "react";
import axios from "axios";
import { sessionStorageCheck, getUserInfo } from "../../utils/userLoginCheck";
const userCreds = sessionStorageCheck();
const userInfo = new getUserInfo(userCreds.email, userCreds.password);
userInfo.getUserData();
class ProfilePage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    
    setTimeout(function(){
      console.log(userInfo.showUserData().email); 
   }, 2000);
  }

  testFunction = () => {
    
    
//     console.log(userCreds);
//    const userInfo = getUserInfo(userCreds.email, userCreds.password);
//    console.log(userInfo);
//userInfo.getUserData()


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
