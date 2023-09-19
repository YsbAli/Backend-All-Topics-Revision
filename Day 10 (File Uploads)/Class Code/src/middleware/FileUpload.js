// _____________________________________________________









// ________________Error Handling________________________



/*




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
        // callback(null, true)
        callback(new Error("Something Went Wrong!"), true)                //showing error
    }
    else {
        callback(null, false)
    }
}


// chenging from module.exports to Uploads

Uploads = multer({
    storage, fileFilter, limits: {
        fileSize: 1024 * 1024 * 5,                             //1024 kb = 1mb, 1mb* 5 = 5mb      //allowing 5MB
    }
})


// Error for single Upload
const uploadSingle = (fileKey) => {
    //returing this function as a middleware
    return function (req, resp, next) {
        // const upload = multer().single('avatar')
        const UploadItem = Uploads.single(fileKey)                            //chenging multer to Uploads because we have assign multer function to the Uploads 

        UploadItem(req, resp, function (err) {
            if (err instanceof multer.MulterError) {
                // A Multer error occurred when uploading.
                return resp.status(500).send(err.message)
            } else if (err) {
                // An unknown error occurred when uploading.
                return resp.status(500).send(err.message)
            }
            // Everything went fine.
            return next()
        })
    }
}





// Error for Multiple Upload
const UploadMultiple = (fileKey) => {
    //returing this function as a middleware
    return function (req, resp, next) {
        const UploadItem = Uploads.any(fileKey)                               //chenging single to any                 

        UploadItem(req, resp, function (err) {
            if (err instanceof multer.MulterError) {
                // A Multer error occurred when uploading.
                return resp.status(500).send(err.message)
            } else if (err) {
                // An unknown error occurred when uploading.
                return resp.status(500).send(err.message)
            }
            // Everything went fine.
            return next()
        })
    }
}






module.exports = { Uploads, uploadSingle, UploadMultiple }


*/






// -----------------------------Fresh Code Of Error Handling-----------------------------




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
        callback(new Error("Something Went Wrong!"), true)                //showing error
    }
    else {
        callback(null, false)
    }
}

// chenging from module.exports to Uploads
Uploads = multer({
    storage, fileFilter, limits: {
        fileSize: 1024 * 1024 * 5,                             //1024 kb = 1mb, 1mb* 5 = 5mb      //allowing 5MB
    }
})


// Error for single Upload
const uploadSingle = (fileKey) => {
    return function (req, resp, next) {
        const UploadItem = Uploads.single(fileKey)                            //chenging multer to Uploads because we have assign multer function to the Uploads 

        UploadItem(req, resp, function (err) {
            if (err instanceof multer.MulterError) {
                // A Multer error occurred when uploading.
                return resp.status(500).send(err.message)
            } else if (err) {
                // An unknown error occurred when uploading.
                return resp.status(500).send(err.message)
            }
            // Everything went fine.
            return next()
        })
    }
}





// Error for Multiple Upload
const UploadMultiple = (fileKey) => {
    return function (req, resp, next) {
        const UploadItem = Uploads.any(fileKey)                               //chenging single to any                 
        
        UploadItem(req, resp, function (err) {
            if (err instanceof multer.MulterError) {
                // A Multer error occurred when uploading.
                return resp.status(500).send(err.message)
            } else if (err) {
                // An unknown error occurred when uploading.
                return resp.status(500).send(err.message)
            }
            // Everything went fine.
            return next()
        })
    }
}

module.exports = { Uploads, uploadSingle, UploadMultiple }






