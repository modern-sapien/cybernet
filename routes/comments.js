const express = require("express");

const {
    getComments
  } = require("../controllers/commentController");
  
  // to accept info from other routers
  const router = express.Router({mergeParams: true});
  
  router.route("/").get(getComments);
  
  module.exports = router;