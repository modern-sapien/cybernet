const asyncHandler = require("../middleware/async");
const ErrorResponse = require("../utils/errorResponse");
const Image = require("../models/Image");
const User = require("../models/User");
const Comment = require("../models/Comment");

// @desc    Get comments
// @route   GET /api/v1/comments
// @route   GET /api/v1/images/:imageId/comments
// @access  Public
exports.getComments = asyncHandler(async (req, res, next) => {
  if (req.params.imageId) {
    const comments = await Comment.find({ image: req.params.imageId }).populate({
      path: "image",
      select: "title image"
    });

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


// @desc    Get comment
// @route   GET /api/v1/comment/:id
// @access  Private
exports.getComment = asyncHandler(async (req, res, next) => {
  const comment = await (await Comment.findById(req.params.id))
  
  if (!comment) {
    return next(new ErrorResponse(`No comment found with ${req.params.id}`), 404)
  }

  res.status(200).json({
    success: true,
    data: comment
  })
});