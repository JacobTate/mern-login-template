const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const saltRounds = 13;
// compareSync(myPlaintextPassword1, hash)
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
        bcrypt.genSalt(saltRounds, function (err, salt) {
          bcrypt.hash(userData.password, salt, function (err, hash) {
            Users.create({
              firstName: userData.firstName,
              lastName: userData.lastName,
              email: userData.email,
              password: hash,
              route: `${userData.firstName}-${userData.lastName}`,
              isAdmen: false,
            });
        return res.json({ error: false });
          });
        });
      }
    });
  });
  app.post("/api/login/", (req, res) => {
    Users.findOne({ email: req.body.email })
      .then((data) => {
        console.log(data);
        if (data !== null) {
          if (bcrypt.compareSync(req.body.password, data.password)) {
            res.json({ data, error: false });
          } else {
            res.json({ data: null, error: true });
          }
        } else {
          res.json({ data, error: true });
        }
      })
      .catch((err) => {
        if (err) {
          console.log(err);
        }
      });
  });
  app.get("/api/getUserInfo/:email/:password", (req, res) => {
    const userInfo = req.params;
    Users.findOne({
      email: userInfo.email,
      password: userInfo.password,
    }).then((data) => {
      if (data) {
        res.json(data);
      }
    });
  });
  app.put("/api/changePassword", (req, res) => {
    const passwordData = req.body;
    const passwordId = mongoose.Types.ObjectId(passwordData.id);
    Users.findByIdAndUpdate(
      { _id: passwordId },
      { password: passwordData.newPass },
      (err, result) => {
        if (err) throw err;
      }
    );
  });
  app.get("/api/getUsers", (req, res) => {
    Users.find({}).then((data) => {
      res.json(data);
    });
  });
  app.get("/api/getUser/:route", (req, res) => {
    const route = req.params.route;
    Users.findOne({ route: route }).then((data) => {
      if (data === null) {
        res.json({ error: true });
      } else {
        res.json({ error: false, data });
      }
    });
  });
  app.put("/api/changeAccountType", (req, res) => {
    const accountId = req.body.accountId;
    Users.findByIdAndUpdate(
      { _id: accountId },
      { isAdmen: true },
      (err, result) => {
        if (err) throw err;
      }
    );
  });
};
