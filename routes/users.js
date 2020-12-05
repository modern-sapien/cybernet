const express = require("express");
const {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
} = require("../controllers/userController");

// include other resource routers
const imageRouter = require("./images")

const router = express.Router();

// Re-route into other resource routers
router.use("/:userId/images", imageRouter)

router.route("/").get(getUsers).post(createUser);

router.route("/:id").get(getUser).put(updateUser).delete(deleteUser);

module.exports = router;
