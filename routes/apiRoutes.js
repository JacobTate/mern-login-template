const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/LoginTemplate", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const Users = require("../models/index").Users;
module.exports = (app) => {
  app.post("/api/signup", (req, res) => {
    const userData = req.body;
    Users.find({ email: userData.email }).then((data) => {
      if (data.length > 0) {
        if (data[0].email === userData.email) {
          return res.json({ error: true });
        }
      } else {
        Users.create({
          firstName: userData.firstName,
          lastName: userData.lastName,
          email: userData.email,
          password: userData.password,
        });
        return res.json({error: false});
      };
    });
  });
  app.post("/api/login/", (req, res) => {
    Users.find({ email: req.body.email }).then((data) => {
      console.log(data);
      if (req.body.password === data[0].password) {
        console.log(data[0].email);
      } else {
        console.log("error");
      }
    });
  });
};
