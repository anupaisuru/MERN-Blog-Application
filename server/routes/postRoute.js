const express = require("express");
const router = express.Router();
const Post = require("../models/Post");

//create post
router.post("/cpost", async (req, res) => {
  const newPost = new Post(req.body);
  try {
    const savedPost = await newPost.save();
    return res.status(200).json({ message: "post created" });
  } catch (error) {
    return res.status(400).json({ error });
  }
});

//update post
router.put("/upost/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post.username === req.body.username) {
      try {
        const updatedPost = await Post.findByIdAndUpdate(
          req.params.id,
          {
            $set: req.body,
          },
          { new: true }
        );
        return res.status(200).json({ updatedPost });
      } catch (error) {
        return res.status(500).json({ error });
      }
    } else {
      return res
        .status(401)
        .json({ message: "You can update only your post!" });
    }
  } catch (error) {
    return res.status(500).json({ error });
  }
});

//delete post
router.delete("/dpost/:id", async (req, res) => {
  try {
    const postId = req.params.id;
    const post = await Post.findOneAndDelete({ _id: postId });

    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    if (post.username === req.body.username) {
      return res.status(200).json({ message: "Post has been deleted..." });
    } else {
      return res
        .status(401)
        .json({ message: "You can delete only your post!" });
    }
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

//get post
router.get("/getpost/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    return res.status(200).json({ post });
  } catch (error) {
    return res.status(500).json({ error });
  }
});

//get all posts
router.get("/getallpost", async (req, res) => {
  const username = req.query.user;
  const catName = req.query.cat;
  try {
    let posts;
    if (username) {
      posts = await Post.find({ username });
    } else if (catName) {
      posts = await Post.find({
        categories: {
          $in: [catName],
        },
      });
    } else {
      posts = await Post.find();
    }
    return res.status(200).json({ posts });
  } catch (error) {
    return res.status(500).json({ error });
  }
});

module.exports = router;
