const router = require("express").Router();
const Post = require("../models/Post");

//create a post
router.post("/", async (req, res) => {
  const newPost = await new Post(req.body);
  try {
    const savedPost = await newPost.save();
    res.status(200).json({ savedPost });
  } catch (err) {
    res.status(500).json(err);
  }
});
//update a post

//delete a post

//likse a post

//get a post

//get timieline posts

module.exports = router;
