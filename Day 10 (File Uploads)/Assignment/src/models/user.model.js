const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {
      first_name: { type: String, required: true },
      last_name: { type: String, required: true },
      profile_pic: { type: String, required: true },
    },
);

const User = mongoose.model("user", userSchema); // user => users

module.exports = User;
