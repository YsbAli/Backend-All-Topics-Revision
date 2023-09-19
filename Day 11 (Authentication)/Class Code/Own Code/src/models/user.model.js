
const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
},
    {
        versionKey: false,
        timestamps: true

    }
)

module.exports = mongoose.model("user", UserSchema)    //userdata: userdatas