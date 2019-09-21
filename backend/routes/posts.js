const express = require('express');

const PostController = require('../controllers/post');

const checkAuth = require('../middleware/check-auth');
const extractFiles = require('../middleware/file');

const router = express.Router();

router.post('', checkAuth, extractFiles, PostController.createPost);

router.put('/:id', checkAuth, extractFiles, PostController.updatePost);

router.get('', PostController.getPosts);

router.get('/:id', PostController.getPost);

router.delete('/:id', checkAuth, PostController.deletePost);

module.exports = router;
