const mongoose = require('mongoose');

const galarySchema = new mongoose.Schema(
    {
      pictures: [{ type: String, required: true }],
      user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true,
      },
    },
);

const gallary = mongoose.model("gallery", galarySchema); // user => users

module.exports = gallary;
