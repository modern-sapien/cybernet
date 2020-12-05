const express = require("express");
const {
  getImages
} = require("../controllers/imageController");
// to accept info from other routers
const router = express.Router({mergeParams: true});

router.route("/").get(getImages);

module.exports = router;