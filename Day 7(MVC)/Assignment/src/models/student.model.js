// roll id, current batch, createdAt, updatedAt
const mongoose =require("mongoose");
const studentSchema = new mongoose.Schema({
    rollId:{type:Number, required:true},
    currentBatch:{type:String, required:true}
},
{
    versionKey:false,
    timestamps:true
})

const student = mongoose.model("student", studentSchema);
module.exports = student;