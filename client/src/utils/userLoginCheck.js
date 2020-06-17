export function sessionStorageCheck () {
    const getUser = sessionStorage.getItem("LoginTemplateUser");
    const getPassword = sessionStorage.getItem("LoginTemplatePassword");
   return { email: getUser, password: getPassword };
};
 