
//  This is Fresh and Advanced Code For Sending Email
// Now we Will se how we can send email with attachment


const express = require('express')

const User = require("../model/user.model")

const router = express.Router()

const { body, validationResult } = require('express-validator');


router.post("", body("id").notEmpty().isNumeric(),                   //body("id")   should not be empty,,,isNumeric() --> check its number or not
    async (req, resp) => {
        // console.log(body('id'))    //it will give us all the validation function inside body method
        try {
            // const users = await User.create(req.body)
            const errors = validationResult(req);
            // error = []
            if (!errors.isEmpty()) {
                return resp.status(400).json({ errors: errors.array() });
            }

            return resp.send("Send Mail")
        }
        catch (err) {
            return resp.send(err.message)
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
