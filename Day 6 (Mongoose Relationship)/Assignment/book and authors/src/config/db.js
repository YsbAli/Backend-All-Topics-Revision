const mongoose = require("mongoose")

const connect = async () => {
  return mongoose.connect("mongodb://127.0.0.1:27017/book_rivision")
}

module.exports=connect