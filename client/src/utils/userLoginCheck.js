import axios from "axios";
export function sessionStorageCheck() {
  const getUser = sessionStorage.getItem("LoginTemplateUser");
  const getPassword = sessionStorage.getItem("LoginTemplatePassword");
  const isLoggedIn = sessionStorage.getItem("isLoggedIn");
  return { isLoggedIn: isLoggedIn, email: getUser, password: getPassword };
}
export class getUserInfo {
  constructor(email, password) {
    this.email = email;
    this.password = password;
    this.state = {
      email,
      password,
      userInfo: {},
    };
  }
  getUserData() {
    axios
      .get(`/api/getUserInfo/${this.state.email}/${this.state.password}`)
      .then((res) => {
        this.state.userInfo = res.data;
        console.log(res.data);
      });
  }
  showUserData() {
    return this.state.userInfo;
  }
}
export function logOut() {
  sessionStorage.removeItem("LoginTemplateUser");
  sessionStorage.removeItem("LoginTemplatePassword");
  sessionStorage.setItem("isLoggedIn", [false]);
  window.location.reload(false);
}
export function changePassword(oldPass, newPass, id) {
  sessionStorage.setItem("LoginTemplatePassword",  [newPass])
  axios.put("/api/changePassword", {
    oldPass,
    newPass,
    id
  });
}