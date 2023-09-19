const express = require('express');
const connect = require('./configs/db');
const userController = require('./controllers/user.controller');
const app = express();
app.use(express.json());
app.use("/users", userController);



app.listen(4000, async () => {
    try {
        await connect();

    } catch (err) {
        console.log(err.message);
    }
    console.log("Listening on Port 4000");
})