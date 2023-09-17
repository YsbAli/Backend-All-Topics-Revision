

const mongoose = require('mongoose')

const CommentSchema = new mongoose.Schema({
    content: { type: String, require: true },
    post_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "post",
        require: true,
    }
},
    {
        versionKey: false,
        timestamps: true,
    }
)

//Model
// const Comment = mongoose.model("comment", CommentSchema)

// module.exports = Comment

module.exports = mongoose.model("comment", CommentSchema)



