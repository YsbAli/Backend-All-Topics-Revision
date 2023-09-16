
//-----------------------------------------------------------  USER CRUD Starts  -------------------------------------------------------



// Works with user collection ( Endpoints / route )

// GET --> get/users
// GET SIGLE ITEM ---> get/users/:id
// POST --> post/users
// UPDATE SINGLE ITEM ---> patch/users/:id
// DELETE SINGLE ITEM ---> delete/users/:id





const express = require('express')
const router = express.Router()

// Post Method

router.post("/users", async (req, res) => {
    try {
        console.log(req.body)                                    // this will print undefined 
        const user = await User.create(req.body);               //  this will return  a single documents              //express does not khow how to read JSON data that's coming from the requrest data
        // res.send(user)
        return res.status(201).send(user)          //for post status code is 201 (created)

    } catch (e) { console.log(e.message) }
})


//GET Method

router.get('/users', async (req, res) => {
    try {
        const users = await User.find().lean().exec()
        // return res.send(users)
        return res.status(200).send(users)    // for get default status code is 200 (Ok)

    } catch (e) { console.log(e.message) }

})

// Only for Status Code 404

router.get('/users', async (req, res) => {
    try {
        const users = await User.find().lean().exec();
        if (users) {
            res.send(users)
        } else {
            res.status(404).send({ message: "User Not Found" })
        }
    } catch (e) { console.log(e.message) }

})


//getting the single Item   (method + route) --> get / users / ${variable} and the name of variable is id (Send Mongo id)
//    :id    ---> ":" is nothing here,, this ":" is talking that this is a variable

// app.get("/users/:id", async(req, resp)=>{
//     try{
//         // console.log(req.params)
//         const user = await User.findById(req.params.id).lean().exec()
//         resp.send(user)
//     }
//     catch(e){
//         return resp.send(e.message)
//     }
// })



//Finding Single Item 

router.get("/users/:id", async (request, response) => {
    try {
        const single_data = await User.findById(request.params.id).lean().exec()
        response.send(single_data)
        console.log(single_data)
    }
    catch (e) {
        return response.status(500).send(e.message)
    }
})


// Search One Item by Name

router.get("/users/:name", async (req, resp) => {
    try {
        const SearchBY_name = await User.find({ first_name: req.params.name }).lean().exec()
        resp.send(SearchBY_name)
        console.log(SearchBY_name)
    }
    catch (e) {
        resp.status(500).send(e.message)
    }
})


//  ------- Patch API

//FindByIdAndUpdate : it finds the documents, then it does the update but after update it does not getting the document or can't refatching the documents  
//  SO, to handle this we have to do {new:true} ---> it's refatching the  documents


router.patch("/users/:id", async (req, resp) => {
    try {
        const Patch_Api = await User.findByIdAndUpdate(req.params.id, req.body, { new: true }).lean().exec()
        resp.status(200).send(Patch_Api)
        console.log(Patch_Api)
    }
    catch (e) {
        resp.status(500).send(e.message)
    }
})


//Delete Operation

//Delete One

router.delete("/users/:id", async (req, resp) => {

    try {
        const DeleteItem = await User.findByIdAndDelete(req.params.id).lean().exec()
        // resp.send(DeleteItem)
        res.status(200).send(DeleteItem)
        console.log(DeleteItem)

    } catch (e) {
        resp.status(500).send(e.message)
    }

})

// Delete Many


router.delete("/users/:id", async (req, resp) => {

    try {
        const DeleteItem = await User.deleteMany({ age: 30 }).lean().exec()    //delete those items whose age is 30
        // resp.send(DeleteItem)
        resp.status(200).send(DeleteItem)
        console.log(DeleteItem)

    } catch (e) {
        resp.status(500).send(e.message)
    }

})


module.exports = router;



//----------------------------------------------------------- USER CRUD Ends -------------------------------------------------------





