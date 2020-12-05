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
    query = Image.find();
  }

  const images = await query;

  res.status(200).json({
    success: true,
    count: images.length,
    data: images,
  });
});
