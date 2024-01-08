const express = require("express");
const router = express.Router();
const Controllers = require("../controllers");

router.get("/", (req, res) => {
  Controllers.postsController.getPosts(res);
});
router.post("/create", (req, res) => {
  Controllers.postsController.createPosts(req.body, res);
});
router.put("/:id", (req, res) => {
  Controllers.postsController.updatePosts(req, res);
});
router.delete("/:id", (req, res) => {
  Controllers.postsController.deletePosts(req, res);
});
module.exports = router;