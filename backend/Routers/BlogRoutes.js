const express = require('express');
const { createBlog, getBlog, editBlog, deleteBlog, searchBlog, blogsByTags, myBlogs, addComment, editComment, deleteComment, handleLikeBlog, handleDisLikeBlog } = require('../Controllers/BlogController');
const { authenticateToken } = require('../Middlewares/Auth')
const router = express.Router();

router.post('/create', authenticateToken, createBlog);
// router.get('/all', getAllBlogs)
router.get('/search', searchBlog)
router.get('/bytags', blogsByTags)
router.get('/myblogs', authenticateToken, myBlogs)
router.get('/:id', getBlog);
router.put('/update/:blogId', authenticateToken, editBlog)
router.delete('/delete/:blogId', authenticateToken, deleteBlog)
router.put('/addComment/:blogId', authenticateToken, addComment)
router.put('/:blogId/editComment/:commentIndex', authenticateToken, editComment)
router.delete('/:blogId/delete/:commentIndex', authenticateToken, deleteComment)
router.put('/like/:blogId', authenticateToken, handleLikeBlog)
router.put('/dislike/:blogId', authenticateToken, handleDisLikeBlog)
module.exports = router;