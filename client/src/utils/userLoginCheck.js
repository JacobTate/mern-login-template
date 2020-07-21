import axios from "axios";
export function sessionStorageCheck() {
  const getUser = sessionStorage.getItem("LoginTemplateUser");
  const getPassword = sessionStorage.getItem("LoginTemplatePassword");
  const isLoggedIn = sessionStorage.getItem("isLoggedIn");
  return { isLoggedIn: isLoggedIn, email: getUser, password: getPassword };
}
export function logIn (email, password){
  axios
  .post(`/api/login`, {
    email,
    password
  })
  .then((res) => {
    console.log(res);
    if (!res.data.error) {
      sessionStorage.setItem("LoginTemplateUser", [res.data.data.email]);
      sessionStorage.setItem("LoginTemplatePassword", [
        res.data.data.password,
      ]);
      sessionStorage.setItem("isLoggedIn", [true]);
      window.location.replace("/");
    } else {
      alert("somthing was incorrect");
    }
  });
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
export function changeAccountType(accountId){
axios.put("/api/changeAccountType", {
  accountId
})
}