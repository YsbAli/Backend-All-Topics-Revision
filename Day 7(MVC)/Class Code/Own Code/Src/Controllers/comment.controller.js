




// //----------------------------------------------------------- COMMAND CRUD STARTS -------------------------------------------------------





/*
Working with commands collection ( Endpoints / route )

GET --> get/commands
GET SIGLE ITEM ---> get/commands/:id
POST --> post/commands
UPDATE SINGLE ITEM ---> patch/commands/:id
DELETE SINGLE ITEM ---> delete/commands/:id

*/


// const Comment = require('../module/comment.model')
// const express = require('express')
// const router = express.Router()

// router.post('', async (req, resp) => {
//     try {
//         const comments = await Comment.create(req.body)
//         return resp.send(comments)
//     }
//     catch (e) {
//         return resp.status(500).send(e.message)
//     }
// })


// router.get("/", async (req, resp) => {
//     try {
//         const comments = await Comment.find().lean().exec()
//         return resp.send(comments)
//     } catch (e) {
//         return resp.status(500).send(e.message)
//     }
// })

// router.get("/:id", async (req, resp) => {
//     try {
//         const comments = await Comment.findById(req.params.id).lean().exec()
//         return resp.send(comments)
//     }
//     catch (e) {
//         return resp.status(500).send(e.message)
//     }
// })


// router.patch('/:id', async (req, resp) => {
//     try {
//         const comments = await Comment.findByIdAndUpdate(req.params.id, req.body, { new: true })
//         return resp.send(comments)
//     }
//     catch (e) {
//         return resp.status(500).send(e.message)
//     }

// })



// router.delete("/:id", async (req, resp) => {
//     try {
//         const comments = await Comment.findByIdAndDelete(req.params.id).lean().exec()

//         return resp.send(comments)
//     }
//     catch (e) {
//         return resp.status(500).send(e.message)
//     }
// })


// module.exports = router;


//-------------- COMMEND CRUD ENDS -----------------------




// Now Fresh and refactoring code ....

const Comment = require('../module/comment.model')

const express = require('express')

const router = express.Router()

const CrudController = require('./Crud.controllers')


router.post('/', CrudController(Comment).post)

//getall
router.get('/', CrudController(Comment).GetAll)

//getOne
router.get('/:id', CrudController(Comment).GetOne)

//UpdateOne
router.patch('/:id', CrudController(Comment).updateOne)

// deleteOne
router.delete("/:id", CrudController(Comment).deleteOne)

module.exports = router;

