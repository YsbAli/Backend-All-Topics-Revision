

// ------------------------------------- User Model-----------------------------------------------------


const mongoose = require('mongoose')

// Schema + model

const userSchema = new mongoose.Schema({
    id: { type: Number, require: true, unique: true },  //not _id
    first_name: { type: String, require: true },
    last_name: { type: String, require: true },
    email: { type: String, require: true },
    gender: { type: String, require: false, default: "Male" },
    age: { type: Number, require: true },
    ip_address: { type: String, require: false }
},
    {
        versionKey: false,    //remove __v
        timestamps: true,     //add 2 fields -- createdat and UpdatedAt

    }
)

// const User = mongoose.model("user", userSchema)   //user --> users       //// User ==> db.users()


// module.exports = User;

// or 

module.exports = mongoose.model("user", userSchema)     //directly exports
