const express = require("express");
const router = express.Router();

// GET ALL
router.get('/', (req, res) =>  {
res.status(200).json({success: true, msg: "Show all users"});
});
// GET ONE
router.get('/:id', (req, res) =>  {
res.status(200).json({success: true, msg: `display one user ${req.params.id}`});
});
// POST
router.post('/', (req, res) =>  {
res.status(200).json({success: true, msg: "create new user"});
});
// UPDATE
router.put('/:id', (req, res) =>  {
res.status(200).json({success: true, msg: `display updated user ${req.params.id}`});
});
// Delete
router.delete('/:id', (req, res) =>  {
res.status(200).json({success: true, msg: `delete user ${req.params.id}`});
});

module.exports = router;