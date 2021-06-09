const express = require('express');
const router = express.Router();
const Post = require('../models/Post');


router.get('/', (req, res) => {
    res.send('We are on posts');
});

router.post('/', async (req, res) => {
    console.log("Soy un adulto independientee");

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

module.exports = router;