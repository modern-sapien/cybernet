const express = require("express");

const {
    getComments, getComment
  } = require("../controllers/commentController");
  
  // to accept info from other routers
  const router = express.Router({mergeParams: true});
  
  const advResults = require("../middleware/advResults");
  const Comment = require("../models/Comment");

  router.route("/").get(advResults(Comment, {
    path: "image",
    select: "title"
  }), getComments);
  
  router.route("/:id").get(getComment)
  module.exports = router;