const mongoose = require("mongoose");
const { default: slugify } = require("slugify");

const ImageSchema = new mongoose.Schema({
    title: {
        type: String,
        trim: true,
        required: [true, "please add a title"]
    },
    slug: String,
    image: {
        type: String,
        required: [true, 'please add an image']
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