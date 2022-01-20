const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("Hey from the user route");
});

module.exports = router;
