// DAY6  (Mongoose Relationship)

const express = require('express')
const mongoose = require('mongoose')
const app = express()


app.use(express.json())                                      // it will read the  request and convert req.body into json objects




//    connet to mongodb
const ConnectDB = () => {
    return mongoose.connect("mongodb+srv://Masai:Masai@masai-day6.i3hl2m2.mongodb.net/Day7?retryWrites=true&w=majority");
}



// ------------------------------------- User Model-----------------------------------------------------


//  create userSchema  + model


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

const User = mongoose.model("user", userSchema)   //user --> users       //// User ==> db.users()



// ------------------------------------- Post Model-----------------------------------------------------



const PostSchema = new mongoose.Schema({
    title: { type: String, require: true },
    body: { type: String, require: true },
    user_id: {
        type: mongoose.Schema.Types.ObjectId,                       //it referes to mongodb id 
        ref: "user",                                                       //it referes to the user collection 
        required: true,
    },

    tag_ids: [{ type: mongoose.Schema.Types.ObjectId, ref: "tag", }]
},
    {
        versionKey: false,
        timestamps: true,
    }
)


//Model

const Post = mongoose.model("post", PostSchema)


// ---------------------- Comment Schema ----------------------


const CommentSchema = new mongoose.Schema({
    content: { type: String, require: true },
    post_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "post",
        require: true,
    }
},
    {
        versionKey: false,
        timestamps: true,
    }
)

//Model
const Comment = mongoose.model("comment", CommentSchema)



//------------------- Tag Model ----------------------

const tagSchema = new mongoose.Schema({
    name: { type: String, require: true, unique: true },
},
    {
        versionKey: false,
        timestamps: true,
    }

)


//model 
const Tag = mongoose.model("tag", tagSchema)

