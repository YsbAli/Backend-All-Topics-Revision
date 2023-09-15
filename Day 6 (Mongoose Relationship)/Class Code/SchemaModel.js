// Video Starts at 1:00:00 

//     Blog Post System

// User  ---- write the post
// Post    --- it has title and body
// command  -- commands
// Tags   -- nothing but name

// User and Post connected  
// Post and command connected
// Post and Tags connected




const express = require('express')
const mongoose = require('mongoose')
const app = express()

app.use(express.json())


// step 1 

const ConnectDB = ()=>{
    return mongoose.connect("mongodb+srv://Masai:Masai@masai-day6.i3hl2m2.mongodb.net/Day7?retryWrites=true&w=majority")
}



// step2 


// -------------- User Schema ------------------

const UserSchema = new mongoose.Schema({

    id:{type: Number, require:true, unique:true},

    first_name:{type: String, require:true},

    last_name:{type: String, require:true},

    email:{type: String, require:true},

    age:{type: Number, requre:true},

    gender:{type: String, require:true, default:"Male"},

    ip_address: {type: String, required: false}

})


const User = mongoose.model("user", UserSchema)



// ---------------- POST Schema ----------------------------


const PostSchema = new mongoose.Schema({
    title: {type: String, require:true},
    body:{type: String, require:true},
    user_id : {type: mongoose.Schema.Types.ObjectId,                       //it referes to mongodb id 
        ref:"user",                                                       //it referes to the user collection 
        required:true,
    },

    tag_ids :[{type:mongoose.Schema.Types.ObjectId, ref:"tag",}]
},
{
    versionKey:false,
    timestamps:true,
}) 


//Model

const Post = mongoose.model("post", PostSchema)            //post collection is created by mongoose,,,it will be in plural form post ---posts


// ---------------------- Comment Schema ----------------------


const CommentSchema = new mongoose.Schema({
   content : {type: String, require: true}, 
   post_id : {type: mongoose.Schema.Types.ObjectId,
    ref: "post",
    require: true,
}
})

//Model
const Comment = mongoose.model("comment", CommentSchema)            // comment ---comments 



 //------------------- Tag Model ----------------------

 const tagSchema = new mongoose.Schema({
    name : {type: String, require: true, unique:true},
 })


//model 
const Tag = mongoose.model("tag", tagSchema )                 // tag ---tags

