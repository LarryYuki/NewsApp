const express = require("express");
const router = express.Router();
const db = require("../models");

router.get("/", (req, res) => {
  db.Article.find().then(allarticles => {
  res.json(allarticles );
  });
});
router.post("/", (req, res) => {
    console.log(req.body);
  db.Article.create(req.body).then(allarticles => {
    res.json(allarticles );
  });
});

module.exports = router;