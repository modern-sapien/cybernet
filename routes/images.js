const express = require("express");

const {
  getImages,
  getImage,
  addImage,
  updateImage,
  uploadImage,
  deleteImage,
} = require("../controllers/imageController");

// include resources from other routers
const commentRouter = require("./comments");

// to accept info from other routers
const router = express.Router({ mergeParams: true });

const Image = require("../models/Image");
const advResults = require("../middleware/advResults");
// auth
const { protect } = require("../middleware/auth");

// re-route into other resource routers
router.use("/:imageId/comments", commentRouter);

router
  .route("/")
  .get(
    // advResults(
    //   Image, {
    //   path: "user",
    //   select: "username photo",
    // }),
    getImages
  )
  .post(protect, addImage);

router.route("/upload").post(protect, uploadImage);

router
  .route("/:id")
  .get(getImage)
  .put(protect, updateImage)
  .delete(protect, deleteImage);

module.exports = router;
