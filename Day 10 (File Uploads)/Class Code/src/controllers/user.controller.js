

/*

const express = require('express')

const User = require("../models/user.model")

const router = express.Router()

// const path = require("path")

const Uploads = require('../middleware/FileUpload')


//for single version
router.post("/single", Uploads.single("profile_pic"), async (req, resp) => {
    try {
        // console.log(req.file)             // it's an object
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
router.post("/multiple", Uploads.any("profile_pic"),async (req, resp) => {

    try {
        const filePaths = req.files.map(file=> file.path)              // this is for the each file path,,,
        const user = await User.create({
            id: req.body.id,

            first_Name: req.body.first_Name,

            last_Name: req.body.last_Name,

            email: req.body.email,

            password: req.body.password,

            age: req.body.age,

            // profile_pic: req.file.path,           //here req.file.path  (path is for file path)
            profile_pic: filePaths,                // we are giving the each file path inside the filePaths variable
        })
        return resp.status(201).send(user)
    }
    catch (err) {
        return resp.status(500).send(err.message)
    }
})


module.exports = router;



*/





// ----------------- Error Handling ---------------------





const express = require('express')

const User = require("../models/user.model")

const router = express.Router()


//importing from FileUploads 
const { Uploads, uploadSingle, UploadMultiple } = require('../middleware/FileUpload')


//for single version
// router.post("/single", Uploads.single("profile_pic"), async (req, resp) => {
router.post("/single", uploadSingle("profile_pic"), async (req, resp) => {
    try {
        // console.log(req.file)             // it's an object
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
// router.post("/multiple", Uploads.any("profile_pic"),async (req, resp) => {
router.post("/multiple", UploadMultiple("profile_pic"), async (req, resp) => {

    try {
        const filePaths = req.files.map(file => file.path)              // this is for the each file path,,,
        const user = await User.create({
            id: req.body.id,

            first_Name: req.body.first_Name,

            last_Name: req.body.last_Name,

            email: req.body.email,

            password: req.body.password,

            age: req.body.age,

            // profile_pic: req.file.path,           //here req.file.path  (path is for file path)
            profile_pic: filePaths,                // we are giving the each file path inside the filePaths variable
        })
        return resp.status(201).send(user)
    }
    catch (err) {
        return resp.status(500).send(err.message)
    }
})


module.exports = router;