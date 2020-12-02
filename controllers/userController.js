const User = require("../models/User");

// @desc    Get all users
// @route   GET /api/v1/users
// @access  Public
exports.getUsers = (req, res, next) => {
  res.status(200).json({ success: true, msg: "Show all users" });
};

// @desc    Get single user
// @route   GET /api/v1/users/:id
// @access  Public
exports.getUser = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, msg: `display one user ${req.params.id}` });
};

// @desc    Create new user
// @route   POST /api/v1/users/
// @access  Public
exports.createUser = async (req, res, next) => {
  const user = await User.create(req.body);

  res.status(201).json({
    success: true,
    data: user
  })
};

// @desc    Update user
// @route   PUT /api/v1/users/:id
// @access  Private
exports.updateUser = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, msg: `display updated user ${req.params.id}` });
};

// @desc    Delete user
// @route   Delete /api/v1/users/:id
// @access  Private
exports.deleteUser = (req, res, next) => {
  res.status(200).json({ success: true, msg: `delete user ${req.params.id}` });
};
