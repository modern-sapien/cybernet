const crypto = require("crypto");
const mongoose = require("mongoose");
const slugify = require("slugify");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const UserSchema = new mongoose.Schema(
  {
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
      maxlength: [50, "email cannot be more than 150 characters"],
      minlength: 7,
      select: false,
    },
    resetPasswordToken: String,
    resetToken: String,
    resetPasswordExpire: Date,
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
      default: "no-photo.jpg",
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

// Create user slug from name
UserSchema.pre("save", function (next) {
  this.slug = slugify(this.username, { lower: true });
  // console.log('Slugify ran', this.username)
  next();
});

// encrypt password using bcrypt
UserSchema.pre("save", async function (next) {
  if(!this.isModified("password")) {
    next();
  }
  
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

// Sign JWT & return
UserSchema.methods.getSignedJwtToken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE,
  });
};

// Match user entered password to hashed password in database
UserSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

// Cascase delete images when a user is deleted
UserSchema.pre("remove", async function (next) {
  console.log(`images being removed from user ${this._id}`);
  await this.model("Image").deleteMany({ user: this._id });
  next();
});

// reverse populate with virtuals
UserSchema.virtual("images", {
  ref: "Image",
  localField: "_id",
  foreignField: "user",
  justOne: false,
});

// generate and has password token
UserSchema.methods.getResetPasswordToken = function() {
  // generate token
  const resetToken = crypto.randomBytes(20).toString("hex");

  // hash token & saet to resetPasswordToken field
  this.resetPasswordToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");

  // set expire
  this.resetPasswordExpire = Date.now() + 10 * 60 * 1000

  return resetToken;
};

module.exports = mongoose.model("User", UserSchema);
