const express = require('express');
const AuthorController= require('../controllers/authorController')
const BlogConctroller= require('../controllers/blogControllers')
const router = express.Router();

router.post('/createAuthor',AuthorController.createAuthor);
router.post('/createBlog', BlogConctroller.createBlogs);
router.get('/getblogs', BlogConctroller.getBlogs)
router.put('/blogs/:blogId' ,BlogConctroller.updateBlogs);
router.get('/deleteBlogById', BlogConctroller.deleteBlogByid);
module.exports = router;
