const mongoose = require("mongoose");

const CommentSchema = new mongoose.Schema({
    comment: {
        type: String,
        trim: true,
        required: [true, "please add a comment"],
        maxlength: 120
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    user: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: true
    },
    image: {
        type: mongoose.Schema.ObjectId,
        ref: "Image",
        required: true
    }
})

module.exports = mongoose.model("Comment", CommentSchema)