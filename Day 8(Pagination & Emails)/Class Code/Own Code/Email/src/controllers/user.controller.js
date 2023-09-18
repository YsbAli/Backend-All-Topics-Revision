
// const express = require('express')

// const router = express.Router()

// const User = require("../model/user.model")

// // app.get  ---> we don't use app.get ,,,,we use router.get ---> because app is whole application object which is a very very big object,,,
// // but here, in the controller file we only want to do the get post put path delete ,,besially the CRUD http routes, and that's why we are using the router which is going to a smaller object, that's why we use router  


// //our router will be :  /users,,,, /users is defined in app.use there, that's why use here only "/" or ""

// // router.get('', async (req, resp) => {
// //     try {
// //         const userdata = await User.find().lean().exec()
// //         // return resp.status(200).send(user)
// //         return resp.status(200).send({ userdata })
// //     }
// //     catch (err) {
// //         return resp.status(500).send(err.message)
// //     }

// // })




// // // Pagination System


// // router.get('', async (req, resp) => {
// //     try {
// //         //pagination
// //         const page = req.query.page || 1
// //         const size = req.query || 15

// //         //  page = 1 then (page - 1) = 0, then skip 0 items , limit (size) //1 - 15 items
// //         //  page = 2 then (page - 1 ) = 1,,, skip = ((page - 1 ) * size) = 15 items and limit (size) // 16-30 items 


// //         // //using skip and limit
// //         const userdata = await User.find().skip((page - 1) * size).limit(size).lean().exec()


// //         // // Total Documents
// //         // const TotalDocuments = await User.find().countDocuments()


// //         // TotalPages  (Math.ceil will give us the Upper Value total number with out decimal number)
// //         const TotalPages = Math.ceil((await User.find().countDocuments()) / size)

// //         return resp.status(200).send({ userdata, TotalPages })
// //     }
// //     catch (err) {
// //         return resp.status(500).send(err.message)
// //     }

// // })



// // Pagination System 

// router.get('', async (req, resp) => {
//     try {

//         const page = req.query.page || 1
//         const size = req.query.size || 15

//         const query = { gender: "Female" }

//         // skip() and limit()
//         // const userdata = await User.find().skip((page - 1) * size).limit(size).lean().exec()
//         const users = await User.find(query).skip((page - 1) * size).limit(size).lean().exec()
//         // console.log(userdata)

//         // const TotalPages = Math.ceil((await User.find().countDocuments()) / size)
//         const TotalPages = Math.ceil((await User.find(query).countDocuments()) / size)
//         // console.log(TotalPages)

//         return resp.status(200).send({ users, TotalPages })
//     }
//     catch (err) {
//         return resp.status(500).send(err.message)
//     }

// })

// router.post('/', async (req, resp) => {
//     try {
//         const userdata = await User.create(req.body)
//         // return resp.status(200).send(user)
//         return resp.status(201).send({ userdata })

//     }
//     catch (err) {
//         return resp.status(500).send(err.message)
//     }

// })

// module.exports = router;














// ------------Fresh Code-----------------



// const express = require('express')

// const router = express.Router()

// const User = require("../model/user.model")




// //  Pagination System 

// router.get('', async (req, resp) => {
//     try {

//         const page = req.query.page || 1
//         const size = req.query.size || 15

//         const query = { gender: "Female" }

//         // skip() and limit()
//         // const userdata = await User.find().skip((page - 1) * size).limit(size).lean().exec()
//         // console.log(userdata)

//         const users = await User.find().skip((page - 1) * size).limit(size).lean().exec()

//         //with query
//         // const users = await User.find(query).skip((page - 1) * size).limit(size).lean().exec()

//         const TotalPages = Math.ceil((await User.find().countDocuments()) / size)

//         //with query
//         // const TotalPages = Math.ceil((await User.find(query).countDocuments()) / size)
//         // console.log(TotalPages)

//         return resp.status(200).send({ users, TotalPages })
//     }
//     catch (err) {
//         return resp.status(500).send(err.message)
//     }

// })


// module.exports = router;








// ---------------------- Pagination Ends -------------------------











// ------------------------ Email Starts -----------------------





const express = require('express')

const router = express.Router()

const User = require("../model/user.model")

const nodemailer = require("nodemailer");





//  Pagination System 

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



// Email 


router.post('', async (req, resp) => {
    try {

        const transporter = nodemailer.createTransport({
            host: "sandbox.smtp.mailtrap.io",
            port: 587,
            secure: false,
            auth: {
                // TODO: replace `user` and `pass` values from <https://forwardemail.net>
                user: "416ee8e8f907fe",
                pass: "247a390a39df4a",
            },
        });

            // send mail with defined transport object
            const info = await transporter.sendMail({
                from: '"Fred Foo 👻" <foo@example.com>', // sender address
                to: "bar@example.com, baz@example.com", // list of receivers
                subject: "Hello ✔", // Subject line
                text: "Hello world?", // plain text body
                html: "<h1> Hello Buddy! This is for <h2>NodeMailer </h2>testing </h1>", // html body
            });
            return resp.send("Mail Send")
    }
    catch (err) {
        return resp.send(err.message)
    }
})







module.exports = router;
