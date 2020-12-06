const express = require("express");

const {
  getImages, getImage, addImage, updateImage, deleteImage
} = require("../controllers/imageController");

const Image = require("../models/Image");
const advResults = require("../middleware/advResults");

// to accept info from other routers
const router = express.Router({mergeParams: true});

router.route("/").get(advResults(Image, {
      path: "user",
      select: "username photo",
    }), getImages).post(addImage)

router.route("/:id").get(getImage).put(updateImage).delete(deleteImage);

module.exports = router;