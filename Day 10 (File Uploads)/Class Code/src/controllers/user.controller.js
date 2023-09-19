
//  ---------------------This is for profile_pic upload commit ---------------------



const express = require('express')

const User = require("../models/user.model")

const router = express.Router()

// const path = require("path")

const Uploads = require('../middleware/FileUpload')


//for single version
router.post("/single", Uploads.single("profile_pic"), async (req, resp) => {
    try {
        const user = await User.create({
            id: req.body.id,

            first_Name: req.body.first_Name,

            last_Name: req.body.last_Name,

            email: req.body.email,

            password: req.body.password,

            age: req.body.age,

            profile_pic: req.file.path,           //here req.file.path  (path is for file path)
        })
        return resp.status(201).send(user)
    }
    catch (err) {
        return resp.status(500).send(err.message)
    }
})


//multiple version
router.post("/multiple", async (req, resp) => {
    try {
        const user = await User.create({})
        return resp.status(201).send(user)
    }
    catch (err) {
        return resp.status(500).send(err.message)
    }
})



module.exports = router;









