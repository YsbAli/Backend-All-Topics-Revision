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






//----------------------------------------------------------- USER CRUD Starts -------------------------------------------------------





// Works with user collection ( Endpoints / route )

// GET --> get/users
// GET SIGLE ITEM ---> get/users/:id
// POST --> post/users
// UPDATE SINGLE ITEM ---> patch/users/:id
// DELETE SINGLE ITEM ---> delete/users/:id




// Post Method

app.post("/users", async (req, res) => {
    try {
        console.log(req.body)                                    // this will print undefined 
        const user = await User.create(req.body);               //  this will return  a single documents              //express does not khow how to read JSON data that's coming from the requrest data
        // res.send(user)
        return res.status(201).send(user)          //for post status code is 201 (created)

    } catch (e) { console.log(e.message) }
})





//GET Method

app.get('/users', async (req, res) => {
    try {
        const users = await User.find().lean().exec()
        // return res.send(users)
        return res.status(200).send(users)    // for get default status code is 200 (Ok)

    } catch (e) { console.log(e.message) }

})




// Only for Status Code 404

app.get('/users', async (req, res) => {
    try {
        const users = await User.find().lean().exec();
        if (users) {
            res.send(users)
        } else {
            res.status(404).send({ message: "User Not Found" })
        }
    } catch (e) { console.log(e.message) }

})



//getting the single Item   (method + route) --> get / users / ${variable} and the name of variable is id (Send Mongo id)
//    :id    ---> ":" is nothing here,, this ":" is talking that this is a variable

// app.get("/users/:id", async(req, resp)=>{
//     try{
//         // console.log(req.params)
//         const user = await User.findById(req.params.id).lean().exec()
//         resp.send(user)
//     }
//     catch(e){
//         return resp.send(e.message)
//     }
// })





//Finding Single Item 

app.get("/users/:id", async (request, response) => {
    try {
        const single_data = await User.findById(request.params.id).lean().exec()
        response.send(single_data)
        console.log(single_data)
    }
    catch (e) {
        return response.status(500).send(e.message)
    }
})


// Search One Item by Name

app.get("/users/:name", async (req, resp) => {
    try {
        const SearchBY_name = await User.find({ first_name: req.params.name }).lean().exec()
        resp.send(SearchBY_name)
        console.log(SearchBY_name)
    }
    catch (e) {
        resp.status(500).send(e.message)
    }
})


//  ------- Patch API

//FindByIdAndUpdate : it finds the documents, then it does the update but after update it does not getting the document or can't refatching the documents  
//  SO, to handle this we have to do {new:true} ---> it's refatching the  documents


app.patch("/users/:id", async (req, resp) => {
    try {
        const Patch_Api = await User.findByIdAndUpdate(req.params.id, req.body, { new: true }).lean().exec()
        resp.status(200).send(Patch_Api)
        console.log(Patch_Api)
    }
    catch (e) {
        resp.status(500).send(e.message)
    }
})


//Delete Operation

//Delete One

app.delete("/users/:id", async (req, resp) => {

    try {
        const DeleteItem = await User.findByIdAndDelete(req.params.id).lean().exec()
        // resp.send(DeleteItem)
        res.status(200).send(DeleteItem)
        console.log(DeleteItem)

    } catch (e) {
        resp.status(500).send(e.message)
    }

})

// Delete Many


app.delete("/users/:id", async (req, resp) => {

    try {
        const DeleteItem = await User.deleteMany({ age: 30 }).lean().exec()    //delete those items whose age is 30
        // resp.send(DeleteItem)
        resp.status(200).send(DeleteItem)
        console.log(DeleteItem)

    } catch (e) {
        resp.status(500).send(e.message)
    }

})




//----------------------------------------------------------- USER CRUD Ends -------------------------------------------------------
