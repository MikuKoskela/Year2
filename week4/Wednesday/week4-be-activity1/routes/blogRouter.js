const express = require('express')
const router = express.Router()

const {
    getAllBlogs,
    getBlogById,
    createBlog,
    updateBlog,
    deleteBlog,
} = require('../controllers/blogControllers')


router.get('/',getAllBlogs)

router.post('/', createBlog)

router.put('/:blogId', updateBlog)

router.get('/:blogId', getBlogById)

router.delete('/:blogId', deleteBlog)


module.exports = router;