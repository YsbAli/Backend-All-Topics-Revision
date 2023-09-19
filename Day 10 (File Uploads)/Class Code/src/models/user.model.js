
const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    id: { type: Number, required: true },
    first_Name: { type: String, required: true },
    last_Name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    gender: { type: String, required: false, default: 'Male' },
    age: { type: Number, required: true },
    ip_address: [{ type: String, required: false }],
    birth_date: { type: Number, required: true },
    profile_pic: [{ type: String }],
},
    {
        versionKey: false,
        timestamps: true

    }
)


// in above schema we have added email unique:true and password feild
// put ip_address into an array


// const User = mongoose.model("user", UserSchema)    //user: users


//userdata collection
// module.exports = mongoose.model("userdata", UserSchema)    //userdata: userdatas

//user collection
module.exports = mongoose.model("user", UserSchema)    //userdata: userdatas