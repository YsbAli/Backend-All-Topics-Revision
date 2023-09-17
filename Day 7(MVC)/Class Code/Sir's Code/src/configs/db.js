const mongoose = require("mongoose");

// step 1 :- connect to mongodb
const connect = () => {
  return mongoose.connect(
    // mongodb://127.0.0.1:27017/web14   --> For local connection
    "mongodb+srv://dhaval:dhaval_123@cluster0.ljuvz.mongodb.net/web14?retryWrites=true&w=majority"
  );
};

module.exports = connect;
