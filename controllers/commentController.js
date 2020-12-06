const asyncHandler = require("../middleware/async");
const ErrorResponse = require("../utils/errorResponse");
const Image = require("../models/Image");
const User = require("../models/User");
const Comment = require("../models/Comment");

// @desc    Get comments
// @route   GET /api/v1/comments
// @route   GET /api/v1/users/:userId/comments
// @access  Public
exports.getComments = asyncHandler(async (req, res, next) => {
  if (req.params.imageId) {
    const comments = await Comment.find({ image: req.params.imageId });

    return res.status(200).json({
      success: true,
      count: comments.length,
      data: comments,
    });
  } else {

    const comments = await Comment.find()
    
    res.status(200).json({
      success: true,
      count: comments.length,
      data: comments,
    });
  }
});

