
const express = require('express')
const app = express()

const ConnectDB = require('./config/db')

app.listen(4000, async () => {

    try {
        await ConnectDB()
    }
    catch (err) {
        console.error(err.message)
    }
    console.log("Server in running on port 4000")
})