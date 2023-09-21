

// const express = require("express")

// const Product = require("../models/product.model")


// // importing the middleware
// const authenticate = require("../middleware/authenticate")

// const router = express.Router()



// //useing the middleware
// router.post("/", authenticate, async (req, resp) => {
//     try {
//         console.log(req.user)      //----> this is the same as authorization
//         //so we are getting the user full object,,,so easily we can take the user_id that is _id,,,,soo,,

//         // req.user._id = req.user._id;
//         const user_id = req.user._id;           //assiginig to the variable

//         // const product = await Product.create(req.body)
//         const product = await Product.create({
//             title: req.body.title,
//             price: req.body.price,
//             user_id: user_id,
//         })

//         return resp.send(product)   

//     }
//     catch (err) {
//         return resp.status(500).send(err.message)
//     }
// })





// ___________ fresh code for middleware__________________________




// //useing the middleware  (for post route we have the authentication)
// router.post("/", authenticate, async (req, resp) => {
//     try {
//         console.log(req.user)
//         const user_id = req.user._id;
//         const product = await Product.create({
//             title: req.body.title,
//             price: req.body.price,
//             user_id: user_id,
//         })
//         return resp.send(product)
//     }
//     catch (err) {
//         return resp.status(500).send(err.message)
//     }
// })



//optimize methods,,, we can remove other fields from Products,, because we need only the user_id


/*


router.post("/", authenticate, async (req, resp) => {
    try {
        req.body.user_id = req.user._id;

        const product = await Product.create(req.body)

        return resp.send(product)
    }
    catch (err) {
        return resp.status(500).send({ message: err.message })
    }
})


//for get all products we don't have the authentication, anyone can see the products 
router.get("/", async (req, resp) => {
    try {
        const products = await Product.find().lean().exec()
        return resp.send(products)
    }
    catch (err) {
        return resp.status(500).send(err.message)
    }
})


module.exports = router;




*/




// ____________________ ALL Fresh Code For Authentication Middleware________________________________________



/*

const express = require("express")

//importing the model
const Product = require("../models/product.model")

// importing the middleware
const authenticate = require("../middleware/authenticate")

const router = express.Router()


//authenticated 
router.post("/", authenticate, async (req, resp) => {
    try {
        req.body.user_id = req.user._id;

        const product = await Product.create(req.body)

        return resp.send(product)
    }
    catch (err) {
        return resp.status(500).send({ message: err.message })
    }
})


//for get all products we don't have the authentication, anyone can see the products 
router.get("/", async (req, resp) => {
    try {
        const products = await Product.find().lean().exec()
        return resp.send(products)
    }
    catch (err) {
        return resp.status(500).send(err.message)
    }
})


module.exports = router;



*/




// __________________________Authorization __________________________--


const express = require("express")

//importing the model
const Product = require("../models/product.model")

// importing the middleware
const authenticate = require("../middleware/authenticate")

//importing authorizedMiddleware
const authorizedMiddleware = require("../middleware/authorize")

const router = express.Router()


//authenticated 
router.post("/", authenticate, authorizedMiddleware(["seller", "admin"]), async (req, resp) => {
    try {
        req.body.user_id = req.user._id;

        const product = await Product.create(req.body)

        return resp.send(product)
    }
    catch (err) {
        return resp.status(500).send({ message: err.message })
    }
})


// Patch method  (so that only admin or seller can update the products)
router.patch("/:id", authenticate, authorizedMiddleware(["seller", "admin"]), async (req, resp) => {
    try {
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true })

        return resp.send(product)
    }
    catch (err) {
        return resp.status(500).send({ message: err.message })
    }
})



// delete method  (so that only admin or seller can delete the products)
router.delete("/:id", authenticate, authorizedMiddleware(["S    eller", "Admin"]), async (req, resp) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id)

        return resp.send(product)
    }
    catch (err) {
        return resp.status(500).send({ message: err.message })
    }
})



//for get all products we don't have the authentication, anyone can see the products 
router.get("/", async (req, resp) => {
    try {
        const products = await Product.find().lean().exec()
        return resp.send(products)
    }
    catch (err) {
        return resp.status(500).send(err.message)
    }
})


module.exports = router;












