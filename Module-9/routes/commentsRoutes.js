let express = require("express");
let router = express.Router();
let Controllers = require("../controllers"); //index.js
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
