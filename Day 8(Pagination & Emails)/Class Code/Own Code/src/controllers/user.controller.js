
const express = require('express')

const router = express.Router()

const User = require("../model/user.model")

// app.get  ---> we don't use app.get ,,,,we use router.get ---> because app is whole application object which is a very very big object,,,
// but here, in the controller file we only want to do the get post put path delete ,,besially the CRUD http routes, and that's why we are using the router which is going to a smaller object, that's why we use router  


//our router will be :  /users,,,, /users is defined in app.use there, that's why use here only "/" or ""

router.get('', async (req, resp) => {
    try {
        const user = await User.find().lean().exec()
        // return resp.status(200).send(user)
        return resp.status(200).send({user})

    }
    catch (err) {
        return resp.status(500).send(err.message)
    }

})


router.post('', async (req, resp) => {
    try {
        const user = await User.create(req.body)
        // return resp.status(200).send(user)
        return resp.status(201).send({user})

    }
    catch (err) {
        return resp.status(500).send(err.message)
    }

})





module.exports = router;