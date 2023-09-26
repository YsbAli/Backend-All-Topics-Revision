const express = require('express')

const router = express.Router()

const User = require("../models/user.model")

const CrudController = require("../controllers/crud.controller")


router.get("", async (req, resp) => {
    try {
        const users = await User.find().lean().exec()
        // return resp.send(user)
        return resp.render("users/index.ejs", { users: users })                   //we are using ejs for that we have to render --> render function takes two arguments,, path and data,,,the path should be in views folder
        //now the index.ejs file has the acces to users variable 
    }
    catch (err) {
        return resp.send(err.message)
    }
})


//users/create
router.get("/create", (req, resp) => {
    return resp.render("users/create.ejs")
})








// router.post("/", CrudController(User).post)

// router.get("/", CrudController(User).GetAll)


// router.get("/:id", CrudController(User).GetOne)


// router.patch("/:id", CrudController(User).Update)


// router.delete("/:id", CrudController(User).Delete)


module.exports = router;
