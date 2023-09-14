const express = require('express')
const app = express()
const mongoose = require('mongoose')


//Step 1 --> connect to mongodb

const connetDB = () => {
    // return mongoose.connect('mongodb+srv://yousub:yousub_123@cluster0.yv8ravo.mongodb.net/FirstDB?retryWrites=true&w=majority')
    return mongoose.connect('mongodb+srv://yousub:yousub_123@cluster0.carzze6.mongodb.net/FirstDB?retryWrites=true&w=majority')
}

// Step 2 --> Create a Schema

const userSchema = new mongoose.Schema({
    id: { type: Number, require: true },
    first_name: { type: String, require: true },
    last_name: { type: String, require: true },
    email: { type: String, require: true },
    gender: { type: String, require: false, default: "Male" },
    age: { type: Number, require: true },
    ip_address: { type: String, require: false }
})


// Step 3 --> Create a model (Create a connection between mongoose to mongodb)

// let User;
// try {
//     User = mongoose.model('user', userSchema)    //user = users            // users is collection name ---> in that collection created that Schema
// }
// catch (e) {
//     console.log(e.message)
// }


// don't need to do try catch in the above code

const User = mongoose.model('user', userSchema)



//instead of above code we should try catch below code , because we are interacting with db here...

app.get("/users", async (req, resp) => {
    // resp.send("Hello World!")
    try {
        const users = await User.find().lean().exec()              //db.users.find()   ,,,, find() does not return  a proper promise ,,it returns half promise,,,somthing called  thennable,,, that's why here async await and..... exec() convert that thennable to proper promise
       return resp.send(users)
    }
    catch (e) {
       return resp.send(e.message)
    }
})


app.listen(2345, async () => {
    try {
        await connetDB()                          //mongoose.connect --> returns a promise that's why we use here async await
        console.log("Listeninig on port 2345")
    }
    catch (e) {
        console.log(e.message)
    }
})


