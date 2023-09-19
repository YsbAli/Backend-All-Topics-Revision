
//  This is Fresh and Advanced Code For Sending Email
// Now we Will se how we can send email with attachment


const express = require('express')

const User = require("../models/user.model")

const router = express.Router()

const { body, validationResult } = require('express-validator');


//id validation
// router.post("", body("id").notEmpty().isNumeric(),                   //body("id")   should not be empty,,,isNumeric() --> check its number or not
//     async (req, resp) => {
//         // console.log(body('id'))    //it will give us all the validation function inside body method
//         try {
//             // const users = await User.create(req.body)
//             const errors = validationResult(req);
//             // error = []
//             if (!errors.isEmpty()) {
//                 return resp.status(400).json({ errors: errors.array() });
//             }

//             return resp.send("Send Mail")
//         }
//         catch (err) {
//             return resp.send(err.message)
//         }
//     })



// Validate id and first_Name  and last_Name

// router.post("",
//     body("id").notEmpty().isNumeric(),
//     body("first_Name").isEmpty().isLowercase().isLength({ min: 3, max: 20 }),
//     // body("last_Name").isLowercase().isLength({ min: 3, max: 20 }),
//     // body("last_Name").trim().notEmpty().isLowercase().isLength({ min: 3, max: 20 }),         // --> trim() will also check the Space
//     body("last_Name").isEmpty().isLowercase().isLength({ min: 3, max: 20 }),                     // isEmpty will also check the Space

//     async (req, resp) => {
//         try {
//             const errors = validationResult(req);
//             // error = []
//             if (!errors.isEmpty()) {
//                 return resp.status(400).json({ errors: errors.array() });
//             }

//             return resp.send("Send Mail")
//         }
//         catch (err) {
//             return resp.send(err.message)
//         }
//     })




// ip_address and age

// router.post("",
//     body("id").notEmpty().isNumeric(),
//     body("first_Name").isString().notEmpty().isLowercase().isLength({ min: 3, max: 20 }),
//     body("last_Name").isString().notEmpty().isLowercase().isLength({ min: 3, max: 20 }),                     // isEmpty will also check the Space

//     body("email").isEmail(),                        //----> it will check that is this email or not
//     body("ip_address").notEmpty().isIP(),           //--> it will check empty array             

//     body("age").isNumeric(),                 //----> it check is this number or not or perseInt()

//     body("birth_date").isDate(),               //---> it will check is the date or not ,, everything should be present in date ,,, like day months year

//     async (req, resp) => {
//         try {
//             const errors = validationResult(req);
//             // error = []
//             if (!errors.isEmpty()) {
//                 return resp.status(400).json({ errors: errors.array() });
//             }

//             return resp.send("Send Mail")
//         }
//         catch (err) {
//             return resp.send(err.message)
//         }
//     })


// Email Custom Validation

router.post("",
    body("id").notEmpty().isNumeric(),
    // body("first_Name").isEmpty().isLowercase().isLength({ min: 3, max: 20 }),
    body("last_Name").isLowercase().isLength({ min: 3, max: 20 }),

    body("email").isEmail().custom(async (value) => {
        const user = await User.findOne({ email: value });
        if (user) {
            throw new Error("E-mail is already exists")
        }

    }),

    async (req, resp) => {
        try {
            const errors = validationResult(req);
            // error = []
            if (!errors.isEmpty()) {
                return resp.status(400).json({ errors: errors.array() });
            }

            return resp.send("Working")
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
