const mongoose = require('mongoose')


// ------------------------------------- Post Model-----------------------------------------------------

const PostSchema = new mongoose.Schema({
    title: { type: String, require: true },
    body: { type: String, require: true },
    user_id: {
        type: mongoose.Schema.Types.ObjectId,                       //it referes to mongodb id 
        ref: "user",                                                       //it referes to the user collection 
        required: true,
    },

    tag_ids: [{ type: mongoose.Schema.Types.ObjectId, ref: "tag", }]
},
    {
        versionKey: false,
        timestamps: true,
    }
)


//Model

// const Post = mongoose.model("post", PostSchema)

// module.exports = Post


module.exports = mongoose.model("post", PostSchema)
