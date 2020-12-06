const express = require("express");

const {
  getImages, getImage, addImage, updateImage, deleteImage
} = require("../controllers/imageController");

// include resources from other routers
const commentRouter = require("./comments")

// to accept info from other routers
const router = express.Router({mergeParams: true});

const Image = require("../models/Image");
const advResults = require("../middleware/advResults");

// re-route into other resource routers
router.use("/:imageId/comments", commentRouter);

router.route("/").get(advResults(Image, {
      path: "user",
      select: "username photo",
    }), getImages).post(addImage)

router.route("/:id").get(getImage).put(updateImage).delete(deleteImage);

module.exports = router;