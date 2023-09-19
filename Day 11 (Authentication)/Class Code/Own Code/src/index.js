
const express = require('express')
const app = express()

app.use(express.json())

const ConnectDB = require('./configs/db')

const UserController = require('./controllers/user.controller')


const { Register, Login } = require("./controllers/auth.controller")


//we are directly using the method here,,,don't use kind of middleware
app.post("/register", Register)

//Login
app.post("/login", Login)


app.use('/users', UserController)

app.listen(4011, async () => {

    try {
        await ConnectDB()
    }
    catch (err) {
        console.error(err.message)
    }
    console.log("Server in running on port 4011")
})