const mongoose = require('mongoose')

const ConnectDB = () => {
    console.log("Working! But db Connection lost")
    return mongoose.connect('mongodb+srv://yousub:yousub_123@cluster0.cflcuof.mongodb.net/Day7Live?retryWrites=true&w=majority')
}

module.exports = ConnectDB;