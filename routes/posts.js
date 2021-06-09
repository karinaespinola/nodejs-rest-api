const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

// Get all the posts
router.get('/', async (req, res) => {
    try {
      const posts = await Post.find();
      res.json(posts);
    } catch(err) {
      res.json({message : err});
    }
});

// Submit a post
router.post('/', async (req, res) => {
    try {
        const post = new Post({
            title: req.body.title,
            description: req.body.description
        });
        console.log(post);

        const newPost = await post.save();
        console.log(newPost);

        res.status(201).json({ newPost });
      } catch (err) {
        res.status(400).json({ message: err.message });
      }
});

// Specifi post
router.get('/:postId', async(req, res) => {
  try {
    const post = await Post.findById(req.params.postId);
    res.json(post);
  } catch(err) {
    res.json({message: err});
  }

});

module.exports = router;