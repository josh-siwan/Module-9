const express = require("express");
const router = express.Router();
const Controllers = require("../Module-9-microservices/controllers");

router.get("/", (req, res) => {

  Controllers.fruitsController.getFruit(res);
});


module.exports = router;