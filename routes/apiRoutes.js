const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/LoginTemplate", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
  const Users = require("../models/index").Users;
module.exports = app => {
    app.post("/api/signup", (req, res) => {
        console.log(req.body);
        userData = req.body;
        Users.create({
            firstName: userData.firstName,
            lastName: userData.lastName,
            email: userData.email,
            password: userData.password
        });
    });
};