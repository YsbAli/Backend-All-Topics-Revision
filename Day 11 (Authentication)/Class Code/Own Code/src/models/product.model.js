
const mongoose = require('mongoose')

//ProductModel
const ProductSchema = new mongoose.Schema({
    title: { type: String, required: true },
    price: { type: String, required: true },
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true
    }
},
    {
        versionKey: false,
        timestamps: true

    }
)



module.exports = mongoose.model("Product", ProductSchema)