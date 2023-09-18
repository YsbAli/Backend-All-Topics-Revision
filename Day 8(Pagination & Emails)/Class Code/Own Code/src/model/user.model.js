
const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    id: { type: Number, required: true },
    first_Name: { type: String, required: true },
    last_Name: { type: String, required: true },
    email: { type: String, required: true },
    gender: { type: String, required: false, default: 'Male' },
    age: { type: Number, required: true },
    ip_address: { type: String, required: false },
},
    {
        versionKey: false,
        timestamps: true

    }
)



// const User = mongoose.model("user", UserSchema)    //user: users
module.exports = mongoose.model("user", UserSchema)    //user: users