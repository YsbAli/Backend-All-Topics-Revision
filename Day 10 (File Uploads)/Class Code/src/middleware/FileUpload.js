



/*


const multer = require('multer')

const path = require("path")


const storage = multer.diskStorage({
    // destination: function (req, file, callback) {                              //destination is --> where everything will be stored
    //     callback(null, '/tmp/my-uploads')                                      // cd is callback ---> it tooks null that's error (null is error) and file path, for that we need to export path from path module
    // },

    // filename: function (req, file, callback) {                                   // filename --> on which it will stored everything
    //     const uniquePrefix = Date.now() + Math.random().toString()        //in what time the file uploads,,, we are doing Prefix to maintain the file
    //     callback(null, uniquePrefix + '-' + file.originalname)                 // it takes the unique prefix + file name with extention,,,like 112312341234123-Resume.png
    // }

    destination: function (req, file, callback) {
        callback(null, path.join(__dirname, "../Uploads"))      //here,,, if we give absulote path, then this code might not be work in different system or different OS                          // my files need to upload into Upload folder                     
    },

    filename: function (req, file, callback) {
        const uniquePrefix = Date.now() + Math.random().toString()                         // if we don't do toString then it will add those two numbers (Date.now() + Math.random())
        callback(null, uniquePrefix + '-' + file.originalname)                             // file.originalname will keep the original nane       
    }
})

//File Filter


function fileFilter(req, file, callback) {

    // The function should call `callback` with a boolean
    // to indicate if the file should be accepted

    // To accept the file pass `true`, like so:
    if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
        callback(null, true)
    }
    else {
        // To reject this file pass `false`, like so:
        callback(null, false)
    }
}

module.exports = multer({
    storage, fileFilter, limits: {
        fileSize: 1024 * 1024 * 5,                             //1024 kb = 1mb, 1mb* 5 = 5mb      //allowing 5MB
    }
})                           // multer is function....and every function or array etc are object and we can use object methods



*/




// -------------------- Fresh Code of First Part (video : 45:00) ------------------------


const multer = require('multer')

const path = require("path")


const storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, path.join(__dirname, "../Uploads"))
    },
    filename: function (req, file, callback) {
        const uniquePrefix = Date.now() + Math.random().toString()
        callback(null, uniquePrefix + '-' + file.originalname)
    }
})


//File Filter

function fileFilter(req, file, callback) {
    if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
        callback(null, true)
    }
    else {
        callback(null, false)
    }
}

module.exports = multer({
    storage, fileFilter, limits: {
        fileSize: 1024 * 1024 * 5,                             //1024 kb = 1mb, 1mb* 5 = 5mb      //allowing 5MB
    }
})                          
