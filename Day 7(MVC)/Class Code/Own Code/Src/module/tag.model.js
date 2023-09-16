
const mongoose = require('mongoose')

const tagSchema = new mongoose.Schema({
    name: { type: String, require: true, unique: true },
},
    {
        versionKey: false,
        timestamps: true,
    }

)


//model 
module.exports = mongoose.model("tag", tagSchema)
