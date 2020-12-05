const express = require("express");
const {
  getImages, getImage, addImage
} = require("../controllers/imageController");
// to accept info from other routers
const router = express.Router({mergeParams: true});

router.route("/").get(getImages).post(addImage);
router.route("/:id").get(getImage);

module.exports = router;