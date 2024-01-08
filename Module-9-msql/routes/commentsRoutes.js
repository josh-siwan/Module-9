const express = require("express");
const router = express.Router();
const Controllers = require("../controllers");

router.get("/", (req, res) => {
  Controllers.commentsController.getComments(res);
});
router.post("/create", (req, res) => {
  Controllers.commentsController.createComments(req.body, res);
});
router.put("/:id", (req, res) => {
  Controllers.commentsController.updateComments(req, res);
});
router.delete("/:id", (req, res) => {
  Controllers.commentsController.deleteComments(req, res);
});
module.exports = router;