const express = require('express')

const router = express.Router()

const User = require("../models/user.model")

const CrudController = require("../controllers/crud.controller")


router.get("", async (req, resp) => {
    try {
        const user = await User.find().lean().exec()
        return resp.send(user)
    }
    catch (err) {
        return resp.send(err.message)
    }
})


router.post("/", CrudController(User).post)

// router.get("/", CrudController(User).GetAll)


// router.get("/:id", CrudController(User).GetOne)


// router.patch("/:id", CrudController(User).Update)


router.delete("/:id", CrudController(User).Delete)




module.exports = router;
