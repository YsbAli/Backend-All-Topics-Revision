// require("dotenv").config()

// const jwt = require('jsonwebtoken')




// const verifyToken = (token) => {


//     return new Promise((resolve, reject) => {
//         jwt.verify(token, process.env.JWT_SECRET_KEY, (err, user) => {
//             if (err) return reject(err)

//             resolve(user)


//         })
//     })
// }



// const authenticate = async (req, resp, next) => {

//     //check if autherization header has been set    --> we have req.headers

//     // if not then throw an error
//     if (!req.headers.authorization) {
//         return resp.status(400).send({ message: "authorization failed or invalid token" })
//     }


//     //if bearer token is in authorization header
//     // if not throw an error
//     if (!req.headers.authorization.startsWith("Bearer ")) {
//         return resp.status(400).send({ message: "authorization failed or invalid token" })
//     }




//     //split the bearer token and get the [1] which is the token
//     const token = req.headers.authorization.split(" ")[1]



//     //then we will call the jwt to varify the token 

//     // const user = await verifyToken(token)

//     // console.log("user", user)

//     // output will be like this 

//     // user {
//     //     user: {
//     //       _id: '650a9f93ca04cfc0a656bcb8',
//     //       email: 'ysb@gmail.com',
//     //       password: '$2a$08$m25woafX5QZsckT.uVX4ROzI8z0iupU.JCRNcWqYdWWYqohvlJtti',     
//     //       createdAt: '2023-09-20T07:30:27.704Z',
//     //       updatedAt: '2023-09-20T07:30:27.704Z'
//     //     },
//     //     iat: 1695195390
//     //   }


//     //if token is invalid then we will throw an error

//     let user;

//     try {
//         user = await verifyToken(token)
//     }
//     catch (err) {
//         return resp.status(400).send({ message: "authorization token is incorrect" })
//     }

//     req.user = user.user

//     console.log("user", req.user)

//     // output will be like this ------>

//     // user {
//     //     _id: '650a9f93ca04cfc0a656bcb8',
//     //     email: 'ysb@gmail.com',
//     //     password: '$2a$08$m25woafX5QZsckT.uVX4ROzI8z0iupU.JCRNcWqYdWWYqohvlJtti',       
//     //     createdAt: '2023-09-20T07:30:27.704Z',
//     //     updatedAt: '2023-09-20T07:30:27.704Z'
//     //   }



//     //if token is valid then we will  put the user retrieved from the token in the req object

//     //return next()
//     return next()
// }



// ________________All  for Autorization______________________





// this is all about authentication..... with the help of this we can forced your to logged in before they access to some resourses of my application


/*


const authenticate = async (req, resp, next) => {
    //check if autherization header has been set    --> we have req.headers

    // if not then throw an error
    if (!req.headers.authorization) {
        return resp.status(400).send({ message: "authorization failed or invalid token" })
    }

    //if bearer token is in authorization header
    // if not throw an error
    if (!req.headers.authorization.startsWith("Bearer ")) {
        return resp.status(400).send({ message: "authorization failed or invalid token" })
    }

    //split the bearer token and get the [1] which is the token
    const token = req.headers.authorization.split(" ")[1]

    //then we will call the jwt to varify the token 

    //if token is invalid then we will throw an error

    let user;

    try {
        user = await verifyToken(token)
    }
    catch (err) {
        return resp.status(400).send({ message: "authorization token is incorrect" })
    }

    req.user = user.user

    console.log("user", req.user)
    //if token is valid then we will  put the user retrieved from the token in the req object
    return next()
}


module.exports = authenticate;



*/



// __________________________ Fresh Code for Authentication ______________________


require("dotenv").config()

const jwt = require('jsonwebtoken')

const verifyToken = (token) => {

    return new Promise((resolve, reject) => {
        jwt.verify(token, process.env.JWT_SECRET_KEY, (err, user) => {
            if (err) return reject(err)

            resolve(user)


        })
    })
}


const authenticate = async (req, resp, next) => {

    if (!req.headers.authorization) {
        return resp.status(400).send({ message: "authorization failed or invalid token" })
    }

    if (!req.headers.authorization.startsWith("Bearer ")) {
        return resp.status(400).send({ message: "authorization failed or invalid token" })
    }

    const token = req.headers.authorization.split(" ")[1]

    let user;

    try {
        user = await verifyToken(token)
    }
    catch (err) {
        return resp.status(400).send({ message: "authorization token is incorrect" })
    }

    req.user = user.user

    console.log("user", req.user)
    return next()
}


module.exports = authenticate;
