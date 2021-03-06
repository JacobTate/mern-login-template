const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const UserSchema = new Schema({
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  email: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
  },
  route: {
    type: String,
  },
  isAdmen: {
    type: Boolean
  }
});
const Users = mongoose.model("Users", UserSchema);
module.exports = Users;
