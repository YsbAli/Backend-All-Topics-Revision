




// //----------------------------------------------------------- COMMAND CRUD STARTS -------------------------------------------------------





/*
Working with commands collection ( Endpoints / route )

GET --> get/commands
GET SIGLE ITEM ---> get/commands/:id
POST --> post/commands
UPDATE SINGLE ITEM ---> patch/commands/:id
DELETE SINGLE ITEM ---> delete/commands/:id

*/

const express = require('express')
const router = express.Router()
const Comment = require('../module/comment.model')

router.post("", async (req, resp) => {
    try {
        const commends = await Comment.create(req.body)
        return resp.send(commends)
    }
    catch (e) {
        return resp.status(500).send(e.message)
    }
})


router.get("/", async (req, resp) => {
    try {
        const commends = await Comment.find().lean().exec()
        return resp.send(commends)
    } catch (e) {
        return resp.status(500).send(e.message)
    }
})

router.get("/:id", async (req, resp) => {
    try {
        const commends = await Comment.findById(req.params.id).lean().exec()
        return resp.send(commends)
    }
    catch (e) {
        return resp.status(500).send(e.message)
    }
})


router.patch('/:id', async (req, resp) => {
    try {
        const commends = await Comment.findByIdAndUpdate(req.params.id, req.body, { new: true })
        return resp.send(commends)
    }
    catch (e) {
        return resp.status(500).send(e.message)
    }

})



router.delete("/:id", async (req, resp) => {
    try {
        const commends = await Comment.findByIdAndDelete(req.params.id).lean().exec()

        return resp.send(commends)
    }
    catch (e) {
        return resp.status(500).send(e.message)
    }
})


module.exports = router;


//-------------- COMMEND CRUD ENDS -----------------------

