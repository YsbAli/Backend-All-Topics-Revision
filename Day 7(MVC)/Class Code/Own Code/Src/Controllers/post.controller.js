
//----------------------------------------------------------- POST CRUD Starts -------------------------------------------------------




/*
Working with posts collection ( Endpoints / route )

GET --> get/posts
GET SIGLE ITEM ---> get/posts/:id
POST --> post/posts
UPDATE SINGLE ITEM ---> patch/posts/:id
DELETE SINGLE ITEM ---> delete/posts/:id

*/

// const Post = require('../module/post.model')

// const express = require('express')
// const router = express.Router()
// const CrudController = require('./Crud.controllers')




// router.post('/', async (req, resp) => {
//     try {
//         const posts = await Post.create(req.body)
//         return resp.send(posts)
//     }
//     catch (e) {
//         return resp.status(500).send(e.message)
//     }
// })

// router.post('/', CrudController(Post).post)


// router.get('/', async (req, resp) => {
//     try {
//         const posts = await Post.find().lean().exec()
//         return resp.send(posts)
//     }
//     catch (e) {
//         return resp.status(500).send(e.message)
//     }
// })

//getall
// router.get('/', CrudController(Post).GetAll)


//getone
// router.get('/:id', async (req, resp) => {
//     try {
//         const posts = await Post.findById(req.params.id).lean().exec()

//         return resp.send(posts)

//     }
//     catch (e) {
//         return resp.status(500).send(e.message)
//     }
// })

// router.get('/:id', CrudController(Post).GetOne)


// Update One
// router.patch('/:id', async (req, resp) => {
//     try {
//         const posts = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true })
//         return resp.send(posts)
//     }
//     catch (e) {
//         return resp.status(500).send(e.message)
//     }
// })

//UpdateOne
// router.patch('/:id', CrudController(Post).updateOne)




// router.delete('/:id', async (req, resp) => {
//     try {
//         const posts = await Post.findByIdAndDelete(req.params.id).lean().exec()
//         return resp.send(posts)
//     } catch (e) {
//         return resp.status(500).send(e.message)
//     }
// })


// deleteOne

// router.delete("/:id", CrudController(Post).deleteOne)



// module.exports = router;


//----------------------------------------------------------- POST CRUD Ends -------------------------------------------------------



// Sooo,,,, The fresh Code Will be : _ 




const Post = require('../module/post.model')

const express = require('express')

const router = express.Router()

const CrudController = require('./Crud.controllers')


router.post('/', CrudController(Post).post)

//getall
router.get('/', CrudController(Post).GetAll)

//getOne
router.get('/:id', CrudController(Post).GetOne)

//UpdateOne
router.patch('/:id', CrudController(Post).updateOne)

// deleteOne
router.delete("/:id", CrudController(Post).deleteOne)

module.exports = router;





