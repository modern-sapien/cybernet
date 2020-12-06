const asyncHandler = require("../middleware/async");
const ErrorResponse = require("../utils/errorResponse");
const Image = require("../models/Image");
const User = require("../models/User");
const Comment = require("../models/Comment");
const { Error } = require("mongoose");

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

// @desc    Post comment
// @route   Post /api/v1/comment/images/:imageId/comments
// @access  Private
exports.addComment = asyncHandler(async (req, res, next) => {
  req.body.image = req.params.imageId;
  // req.body.user = req.user.id;

  const image = await Image.findById(req.params.imageId);

  if(!image)  {
    return next(new ErrorRespionse(`No image with the id of ${req.params.imageId}`, 404))
  }

  const comment = await Comment.create(req.body)

  res.status(200).json({
    success: true,
    data: comment
  })
});

// @desc    Update comment
// @route   Put /api/v1/comment/:id
// @access  Private
exports.updateComment = asyncHandler(async (req, res, next) => {

  let comment = await Comment.findById(req.params.id)

  if(!comment)  {
    return next(new ErrorRespionse(`No review with the id of ${req.params.id}`, 404))
  }

  comment = await Comment.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  res.status(200).json({
    success: true,
    data: comment
  })
});

// @desc    Delete comment
// @route   Remove /api/v1/comment/:id
// @access  Private
exports.deleteComment = asyncHandler(async (req, res, next) => {

  let comment = await Comment.findById(req.params.id)

  if(!comment)  {
    return next(new ErrorRespionse(`No comment with the id of ${req.params.id}`, 404))
  }

  await comment.remove()

  res.status(200).json({
    success: true,
    data: {}
  })
});