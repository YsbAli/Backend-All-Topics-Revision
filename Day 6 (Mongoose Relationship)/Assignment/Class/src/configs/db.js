const mongoose = require("mongoose");

// step 1 :- connect to mongodb
const connect = () => {
  return mongoose.connect(
    // mongodb://127.0.0.1:27017/newDB   --> For local connection
    "mongodb+srv://yousub:yousub_123@cluster0.ljuvz.mongodb.net/newDB?retryWrites=true&w=majority"
  );
};

module.exports = connect;
