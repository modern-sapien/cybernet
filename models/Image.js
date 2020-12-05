const mongoose = require("mongoose");

const ImageSchema = new mongoose.Schema({
    title: {
        type: String,
        trim: true,
        required: [false, "please add a title"]
    },
    image: {
        type: String,
        required: [false, 'please add an image']
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    user: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: false
    }
})

module.exports = mongoose.model("Image", ImageSchema)