const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middleware/async");
const User = require("../models/User");

// @desc    Register a user
// @route   GET /api/v1/auth/register
// @access  Public

exports.register = asyncHandler(async (req, res, next) =>   {
   const { username, email, password } = req.body;

   // create user
   const user = await User.create({
       username, email, password
   })

    res.status(200).json({success: true, data: user})
})