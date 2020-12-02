const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "please add a username"],
    unique: [true, "someone else has that name"],
    trim: true,
    maxlength: [50, "name cannot be more than 50 characters"],
  },
  slug: String,
  email: {
    type: String,
    required: [true, "please add an email"],
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "please add a valid email",
    ],
  },
  password: {
    type: String,
    required: [true, "please add a password"],
    maxlength: [150, "email cannot be more than 150 characters"],
  },
  website: {
    type: String,
    required: false,
    maxlength: [200, "website cannot be more than 200 characters"],
  },
  description: {
    type: String,
    required: [false, "please add a password"],
    maxlength: [500, "description cannot be more than 500 characters"],
  },
  photo: {
      type: String,
      default: "no-photo.jpg"
  },
  createdAt: {
      type: Date,
      default: Date.now
  }
});


module.exports = mongoose.model("User", UserSchema)