const mongoose = require("mongoose");
const batchSchema = new mongoose.Schema({
  BatchName: { type: String, required: true },
},{
    versionKey:false,
    timestamps:true,
});
const batch = mongoose.model("batch", batchSchema);
module.exports = batch;
