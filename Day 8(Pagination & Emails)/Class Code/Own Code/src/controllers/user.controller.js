
const express = require('express')

const router = express.Router()

// app.get  ---> we don't use app.get ,,,,we use router.get ---> because app is whole application object which is a very very big object,,,
// but here, in the controller file we only want to do the get post put path delete ,,besially the CRUD http routes, and that's why we are using the router which is going to a smaller object, that's why we use router  

// router.get('', async(req, resp)=>{

// })


modele.exports = router; 