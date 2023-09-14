// console.log("day 5 (Mongodb Advanced")

const express = require('express')
const mongoose = require('mongoose')
const app = express()


// step1:   connet to mongodb

const ConnectDB = () => {
    // mongodb://localhost:27017/web14  ---> previously do this
    return mongoose.connect("mongodb+srv://yousub:yousub123@cluster0.syx7vp9.mongodb.net/web20?retryWrites=true&w=majority")
    //mongodb+srv://Yousub:yousub123@cluster0.mkstvzm.mongodb.net/web19?retryWrites=true&w=majority
}




// step2:  create a Schema  Systax is ---> const userSchema = new mongoose.Schema({})

const userSchema = new mongoose.Schema({
    id: { type: Number, require: true },
    first_name: { type: String, require: true },
    last_name: { type: String, require: true },
    email: { type: String, require: true },
    gender: { type: String, require: false, default: "Male" },
    age: { type: Number, require: true },
    ip_address: { type: String, require: false }

})


// step3: create a model   (Here we need to connect mongoose to mongo db)

let User;
try {
    User = mongoose.model("user", userSchema)        //user == users
}
catch (e) {
    console.log(e.message)
}



app.get('/user', (req, res) => {
    // const users = User.find().lean().exec()                  //db.users.find()     .lean() --> convert mongoose object to json object   ,,,, .exec() --> convert thenable to proper promise
    const users = User.find({}).lean().exec()
    // res.send("Hello its Working")
})



app.listen(3002, async function () {
    // mongoose returns a promise, thats why async await here,,,,,...whenever interecting with db,,, ------  use try{} catch(e){}   ----
    try {
        await ConnectDB()
        console.log("listening on port 3002")

    }
    catch (e) {
        console.log("Some Error", e.message)

    }
})

