const express = require('express');
const Post = require('../models/Post');
const Comment = require('../models/Comment');
const router = express.Router();

router.get('/', async (req, res) => {
const posts = await Post.find().populate('author');
res.json(posts);
});

router.post('/', async (req, res) => {
const { title, content, authorId } = req.body;

const post = new Post({ title, content, author: authorId });
await post.save();

res.json(post);
});

module.exports = router;
