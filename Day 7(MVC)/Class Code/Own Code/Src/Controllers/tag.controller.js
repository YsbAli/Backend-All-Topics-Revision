// //--------------------------------- TAG CRUD Starts -----------------------------


// /*
// Working with tags collection ( Endpoints / route )

// GET --> get/tags
// GET SIGLE ITEM ---> get/tags/:id
// POST --> post/tags
// UPDATE SINGLE ITEM ---> patch/tags/:id
// DELETE SINGLE ITEM ---> delete/tags/:id

// */

// const Tag = require("../module/tag.model")
// const express = require('express')
// const router = express.Router()


// router.post('/', async (req, resp) => {

//     try {
//         const tag = await Tag.create(req.body)
//         return resp.send(tag)
//     } catch (e) {
//         return resp.status(500).send(e.message)
//     }

// })


// router.get("", async (req, resp) => {
//     try {
//         const tags = await Tag.find().lean().exec()
//         return resp.send(tags)
//     }
//     catch (e) {
//         return resp.status(500).send(e.message)
//     }
// })

// // finding one tag

// router.get("/:id", async (req, resp) => {

//     try {
//         const tag = await Tag.findById(req.params.id).lean().exec()
//         return resp.send(tag)
//     }
//     catch (e) {
//         return resp.status(500).send(e.message)
//     }
// })


// router.patch("/:id", async (req, resp) => {
//     try {
//         const tag = await Tag.findByIdAndUpdate(req.params.id, req.body, { new: true })
//         return resp.send(tag)
//     }
//     catch (e) {
//         return resp.status(500).send(e.message)
//     }
// })



// router.delete("/:id", async (req, resp) => {
//     try {
//         const tag = await Tag.findByIdAndDelete(req.params.id)
//         return resp.send(tag)
//     }
//     catch (e) {
//         return resp.status(500).send(e.message)
//     }
// })



// module.exports = router;

//------------------------------------- TAG CRUD Ends --------------------------



// We can refactor our code : - 




const Tag = require('../module/tag.model')

const express = require('express')

const router = express.Router()

const CrudController = require('./Crud.controllers')


router.post('/', CrudController(Tag).post)

//getall
router.get('/', CrudController(Tag).GetAll)

//getOne
router.get('/:id', CrudController(Tag).GetOne)

//UpdateOne
router.patch('/:id', CrudController(Tag).updateOne)

// deleteOne
router.delete("/:id", CrudController(Tag).deleteOne)

module.exports = router;


