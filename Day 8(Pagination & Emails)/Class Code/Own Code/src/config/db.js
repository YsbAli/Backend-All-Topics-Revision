

const mongoose = require('mongoose')


// const ConnectDB = async () => {
//     try {
//         const Data = await mongoose.connect('mongodb://localhost:27017/Day8_Pagination')
//         return Data;
//         // return  mongoose.connect('mongodb://localhost:27017/Day8_Pagination')
//     }

//     catch (e) {
//         console.log(e.message)
//     }
// }


const ConnectDB = () => {
    return mongoose.connect("mongodb+srv://yousub:yousub_123@cluster0.cflcuof.mongodb.net/Day8_Pagination&Email?retryWrites=true&w=majority")
}



module.exports = ConnectDB;