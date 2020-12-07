const path = require("path");
const ErrorResponse = require("../utils/errorResponse");
const mongoose = require("mongoose");
const asyncHandler = require("../middleware/async");
const Image = require("../models/Image");
const User = require("../models/User");


// @desc    Get images
// @route   GET /api/v1/images
// @route   GET /api/v1/users/:userId/images
// @access  Public
exports.getImages = asyncHandler(async (req, res, next) => {
  if (req.params.userId) {
    const images = await Image.find({ user: req.params.userId });
  
    return res.status(200).json({
      success: true,
      count: images.length,
      data: images
    })
  } else {
    res.status(200).json(res.advResults)
  }
});

// @desc    Get single image by image ID
// @route   GET /api/v1/images/:id
// @access  Public
exports.getImage = asyncHandler(async (req, res, next) => {
  const image = await Image.findById(req.params.id).populate({
    path: "user",
    select: "username photo",
  });

  if (!image) {
    return next(
      new ErrorResponse(`No image with the id of ${req.params.id}`),
      404
    );
  }

  res.status(200).json({
    success: true,
    data: image,
  });
});

// @desc    Add image with file image upload
// @route   POST /api/v1/users/:userId/images
// @access  Private
exports.addImage = asyncHandler(async (req, res, next) => {
  req.body.user = req.user.id
  
  req.params.user = req.params.userId;

  const user = await User.findById(req.params.userId);

  if (!user) {
    return next(
      new ErrorResponse(`No user with the id of ${req.params.userid}`),
      404
    );
  }

  if (!req.files) {
    return next(new ErrorResponse(`Issue with uploading the file`), 404);
  }

  const file = req.files.image;

  //make sure image is a photo
  if (!file.mimetype.startsWith("image")) {
    return next(new ErrorResponse(`Please upload an image file`), 400);
  }

  if (file.size > process.env.MAX_FILE_UPLOAD) {
    return next(
      new ErrorResponse(
        `Please upload an image file less than ${process.env.MAX_FILE_UPLOAD}`
      ),
      400
    );
  }

  // console.log(req.files.image);

  // create custom filename
  file.name = `${Date.now().toString()}${user._id}${path.parse(file.name).ext}`;

  file.mv(`${process.env.FILE_UPLOAD_PATH}/${file.name}`, async (err) => {
    if (err) {
      console.error(err);
      return next(new ErrorResponse(`Problem with file upload`), 500);
    }

  const image = await Image.create({
      title: req.body.title,
      user: req.body.user,
      image: `${process.env.FILE_UPLOAD_PATH_NO_DOT}/${file.name}`      
      });

    res.status(200).json({
      success: true,
      data: image
    });
  });
});

// @desc    update image
// @route   PUT /api/v1/users/:userId/images
// @access  Private
exports.updateImage = asyncHandler(async (req, res, next) => {
  let image = await Image.findById(req.params.id);

  if (!image) {
    return next(
      new ErrorResponse(`No image with the id of ${req.params.id}`),
      404
    );
  }

  image = await Image.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  res.status(200).json({
    success: true,
    data: image,
  });
});

// @desc    delete image
// @route   DELETE /api/v1/users/:userId/images
// @access  Private
exports.deleteImage = asyncHandler(async (req, res, next) => {
  const image = await Image.findById(req.params.id);

  if (!image) {
    return next(
      new ErrorResponse(`No image with the id of ${req.params.id}`),
      404
    );
  }

  await image.remove();

  res.status(200).json({
    success: true,
    data: {},
  });
});
