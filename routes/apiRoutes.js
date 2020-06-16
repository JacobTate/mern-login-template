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
        return res.json({ error: false });
      }
    });
  });
  app.post("/api/login/", (req, res) => {
    Users.findOne({ email: req.body.email })
      .then((data) => {
        if (data !== null) {
          if (data.password === req.body.password) {
            res.json({ data, error: false });
          } else {
            res.json({ data: null, error: true });
          };
        } else {
          res.json({data, error: true})
        };
      })
      .catch((err) => {
        if (err) {
          console.log(err);
        }
      });
  });
};
