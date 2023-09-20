
const express = require('express')

const User = require("../models/user.model")

const router = express.Router()


router.post("/", async (req, resp) => {

    try {
        const user = await User.create(req.body)
        return resp.status(201).send(user)
    }
    catch (err) {
        return resp.status(500).send(err.message)
    }
})


router.get("/", async (req, resp) => {

    try {
        const user = await User.find().lean().exec()
        return resp.status(201).send(user)
    }
    catch (err) {
        return resp.status(500).send(err.message)
    }
})


module.exports = router;
