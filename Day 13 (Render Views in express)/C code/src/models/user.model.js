
const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
    first_name: { type: String, require: true },
    last_name: { type: String, require: true },
    email: { type: String, require: true, unique: true },
    age: { type: Number, require: true },



})

const User = mongoose.model('user', UserSchema)

module.exports = User;