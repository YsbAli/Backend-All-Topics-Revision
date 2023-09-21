
const mongoose = require('mongoose')

const ConnectDB = () => {
    // return mongoose.connect("mongodb+srv://yousub:yousub_123@cluster0.cflcuof.mongodb.net/Day8_Pagination&Email?retryWrites=true&w=majority")
    return mongoose.connect("mongodb+srv://yousub:yousub_123@cluster0.cflcuof.mongodb.net/Day11_Authentication?retryWrites=true&w=majority")
    // return mongoose.connect("mongodb+srv://yousub:yousub_123@cluster0.cflcuof.mongodb.net/PracticeDB?retryWrites=true&w=majority")
}


module.exports = ConnectDB;