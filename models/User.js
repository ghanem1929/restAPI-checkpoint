const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
  },
  phone: {
    type: String,
  },
  email: {
    type: String,
    unique: true,
  },
});
const User = mongoose.model("user", userSchema);

module.exports = User;
