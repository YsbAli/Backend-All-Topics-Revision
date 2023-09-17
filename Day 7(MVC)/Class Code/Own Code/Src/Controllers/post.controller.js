
//----------------------------------------------------------- POST CRUD Starts -------------------------------------------------------




/*
Working with posts collection ( Endpoints / route )

GET --> get/posts
GET SIGLE ITEM ---> get/posts/:id
POST --> post/posts
UPDATE SINGLE ITEM ---> patch/posts/:id
DELETE SINGLE ITEM ---> delete/posts/:id

*/


const express = require('express')
const router = express.Router()
const Post = require('../module/post.model')



router.post('/', async (req, resp) => {
    try {
        const posts = await Post.create(req.body)
        return resp.send(posts)
    }
    catch (e) {
        return resp.status(500).send(e.message)
    }
})


router.get('/', async (req, reps) => {
    try {
        const posts = await Post.find().lean().exec()
        return resp.send(posts)
    }
    catch (e) {
        return resp.status(500).send(e.message)
    }
})


//get single item with id
router.get('/:id', async (req, resp) => {
    try {
        const posts = await Post.findById(req.params.id).lean().exec()

        return resp.send(posts)

    }
    catch (e) {
        return resp.status(500).send(e.message)
    }
})



router.patch('/:id', async (req, resp) => {
    try {
        const posts = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true })
        return resp.send(posts)
    }
    catch (e) {
        return resp.status(500).send(e.message)
    }
})


router.delete('/:id', async (req, resp) => {
    try {
        const posts = await Post.findByIdAndDelete(req.params.id).lean().exec()
        return resp.send(posts)
    } catch (e) {
        return resp.status(500).send(e.message)
    }
})



module.exports = router;


//----------------------------------------------------------- POST CRUD Ends -------------------------------------------------------





