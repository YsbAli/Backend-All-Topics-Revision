const mongoose = require("mongoose");
const userSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    gender: { type: String, required: true },
    dateOfBirth: { type: Date, required: true },
    type:[{type:String, required:true}]
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const user = mongoose.model("user", userSchema);
module.exports = user;