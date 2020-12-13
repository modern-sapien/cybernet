const mongoose = require("mongoose");
const { default: slugify } = require("slugify");

const ImageSchema = new mongoose.Schema({
    title: {
        type: String,
        trim: true,
        required: false
    },
    image: {
        type: String,
        required: [true, 'please add an image']
    },
    cloudID: {
        type: String,
        required: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    user: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: true
    }
})

// Create slug from title
ImageSchema.pre("save", function(next)  {
    this.slug = slugify(this.title, {lower: true})

    next();
})



module.exports = mongoose.model("Image", ImageSchema)