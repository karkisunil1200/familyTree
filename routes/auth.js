const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("Hey from the auth route");
});

module.exports = router;
