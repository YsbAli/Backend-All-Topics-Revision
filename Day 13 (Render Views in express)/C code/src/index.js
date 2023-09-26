

const express = require('express')
const connect = require("./configs/db")

const app = express()

app.use(express.json())

const UserController = require("./controllers/user.controller")

app.use("/users", UserController)



app.listen(4013, () => {

    connect()
    console.log("Listening on port 4013")
}) 