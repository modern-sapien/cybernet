const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middleware/async");
const Image = require("../models/Image");
const e = require("express");

// @desc    Get images
// @route   GET /api/v1/images
// @route   GET /api/v1/users/:userId/images
// @access  Public
exports.getImages = asyncHandler(async (req, res, next) => {
  let query;

  if (req.params.userId) {
    query = Image.find({ user: req.params.userId });
  } else {
    query = Image.find().populate({
        path: "user",
        select: "username photo"
    });
  }

  const images = await query;

  res.status(200).json({
    success: true,
    count: images.length,
    data: images,
  });
});

// @desc    Get single image by imae ID
// @route   GET /api/v1/images/:id
// @access  Public
exports.getImage = asyncHandler(async (req, res, next) => {
  const image = await Image.findById(req.params.id).populate({
      path: "user",
      select: "username photo"
  });

  if(!image)    {
      return next(new ErrorResponse(`No image with the id of ${req.params.id}`), 404)
  }

  res.status(200).json({
    success: true,
    data: image,
  });
});
