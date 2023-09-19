const express = require('express')

const User = require("../models/user.model")

const router = express.Router()


router.post("", async (req, resp) => {
    try {
        const user = await User.find().lean().exec()
        return resp.status(201).send(user)
    }
    catch (err) {
        return resp.status(500).send(err.message)
    }
})


router.get('', async (req, resp) => {
    try {

        const page = req.query.page || 1
        const size = req.query.size || 15

        const query = { gender: "Female" }

        const users = await User.find().skip((page - 1) * size).limit(size).lean().exec()

        const TotalPages = Math.ceil((await User.find().countDocuments()) / size)

        return resp.status(200).send({ users, TotalPages })
    }
    catch (err) {
        return resp.status(500).send(err.message)
    }

})


module.exports = router;
