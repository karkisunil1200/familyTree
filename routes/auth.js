const router = require("express").Router();
const User = require("../models/User");

router.get("/register", async (req, res) => {
  const user = await new User({
    username: "John",
    email: "john@gmail.com",
    password: "Nepal123",
  });

  user.save();
  await res.send("ok it is Working!!!.");
});

module.exports = router;
