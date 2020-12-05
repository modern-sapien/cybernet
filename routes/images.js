const express = require("express");
const {
  getImages, getImage
} = require("../controllers/imageController");
// to accept info from other routers
const router = express.Router({mergeParams: true});

router.route("/").get(getImages);
router.route("/:id").get(getImage);

module.exports = router;