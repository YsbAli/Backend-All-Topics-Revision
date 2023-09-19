
const express = require('express')
const app = express()

app.use(express.json())

const ConnectDB = require('./configs/db')

const UserController = require('./controllers/user.controller')

app.use('/users', UserController)

app.listen(4010, async () => {

    try {
        await ConnectDB()
    }
    catch (err) {
        console.error(err.message)
    }
    console.log("Server in running on port 4010")
})