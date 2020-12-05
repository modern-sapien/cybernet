const express = require("express");
const {
  getImages, getImage, addImage, updateImage
} = require("../controllers/imageController");
// to accept info from other routers
const router = express.Router({mergeParams: true});

router.route("/").get(getImages).post(addImage);
router.route("/:id").get(getImage).put(updateImage);

module.exports = router;