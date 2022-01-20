const router = require("express").Router();
const User = require("../models/User");

router.get("/register", (req, res) => {
  const user = new User({
    username: "John",
    email: "john@gmail.com",
    password: "Nepal123",
  });

  res.send("ok it is still good.");
});

module.exports = router;
