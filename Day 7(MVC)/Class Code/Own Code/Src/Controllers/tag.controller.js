//----------------------------------------------------------- TAG CRUD Starts -------------------------------------------------------


/*
Working with tags collection ( Endpoints / route )

GET --> get/tags
GET SIGLE ITEM ---> get/tags/:id
POST --> post/tags
UPDATE SINGLE ITEM ---> patch/tags/:id
DELETE SINGLE ITEM ---> delete/tags/:id

*/

const express = require('express')
const router = express.Router()

router.post('/tags', async (req, resp) => {

    try {
        const tag = await Tag.create(req.body)
        return resp.send(tag)
    } catch (e) {
        return resp.status(500).send(e.message)
    }

})


router.get("/tags", async (req, resp) => {
    try {
        const tags = await Tag.find().lean().exec()
        return resp.send(tags)
    }
    catch (e) {
        return resp.status(500).send(e.message)
    }
})

// finding one tag

router.get("/tags/:id", async (req, resp) => {

    try {
        const tag = await Tag.findById(req.params.id).lean().exec()
        return resp.send(tag)
    }
    catch (e) {
        return resp.status(500).send(e.message)
    }
})


router.patch("/tags/:id", async (req, resp) => {
    try {
        const tag = await Tag.findByIdAndUpdate(req.params.id, req.body, { new: true })
        return resp.send(tag)
    }
    catch (e) {
        return resp.status(500).send(e.message)
    }
})



router.delete("/tag/:id", async (req, resp) => {
    try {
        const tag = await Tag.findByIdAndDelete(req.params.id)
        return resp.send(tag)
    }
    catch (e) {
        return resp.status(500).send(e.message)
    }
})



module.exports = router;

//----------------------------------------------------------- TAG CRUD Ends -------------------------------------------------------
