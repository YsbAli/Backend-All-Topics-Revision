
const express = require('express')
const app = express()

app.use(express.json())

const ConnectDB = require('./config/db')

const UserController = require('./controllers/user.controller')

app.use('/users', UserController)

app.listen(4000, async () => {

    try {
        await ConnectDB()
    }
    catch (err) {
        console.error(err.message)
    }
    console.log("Server in running on port 4000")
})