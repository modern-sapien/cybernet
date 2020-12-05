const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middleware/async");
const Image = require("../models/Image");
const User = require("../models/User");

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

// @desc    Get single image by image ID
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

// @desc    Add image
// @route   POST /api/v1/users/:userId/images
// @access  Private
exports.addImage = asyncHandler(async (req, res, next) => {
    req.params.user = req.params.userId;

    const user = await User.findById(req.params.userId)

  if(!user)    {
      return next(new ErrorResponse(`No user with the id of ${req.params.userid}`), 404)
  }

  const image = await Image.create(req.body)

  res.status(200).json({
    success: true,
    data: image,
  });
});

// @desc    update image
// @route   PUT /api/v1/users/:userId/images
// @access  Private
exports.updateImage = asyncHandler(async (req, res, next) => {
  let image = await Image.findById(req.params.id)

  if(!image)    {
      return next(new ErrorResponse(`No image with the id of ${req.params.id}`), 404)
  }

  image = await Image.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
  })

  res.status(200).json({
    success: true,
    data: image,
  });
});

// @desc    delete image
// @route   DELETE /api/v1/users/:userId/images
// @access  Private
exports.deleteImage = asyncHandler(async (req, res, next) => {
  const image = await Image.findById(req.params.id)

  if(!image)    {
      return next(new ErrorResponse(`No image with the id of ${req.params.id}`), 404)
  }

  await image.remove()

  res.status(200).json({
    success: true,
    data: {}
  });
});

