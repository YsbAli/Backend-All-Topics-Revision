
// const User = require("../models/user.model")


// const Register = async (req, resp) => {
//     try {

//         // we will try to find the user with the email provided
//         let user = await User.findOne({ email: req.body.email }).lean().exec()


//         //if user is found then it is an error
//         if (user) {
//             return resp.status(400).send({ message: "This Email is Allready Exits! Please try another email" })
//         }


//         //if user is not found then we will create the user with the email and the password provided
//         user = await User.create(req.body)


//         //then we will hash the password to make the password more secure (besically we encrype the password so that no one can see it)
//         //  --- First install bcryptjs,,,npm i bcryptjs



//         resp.send(user)
//     }
//     catch (err) {
//         return resp.status(500).send(err.message)
//     }
// }



// const Login = (req, resp) => {
//     try {
//         resp.send("Login")
//     }
//     catch (err) {
//         return resp.status(500).send(err.message)
//     }
// }


// module.exports = { Register, Login }









// ________________________________________ JWT Token______________________________________



// const User = require("../models/user.model")

// const jwt = require('jsonwebtoken')

// require('dotenv').config()


// //creating newToken function
// const newToken = (user) => {
//     console.log(process.env)
//     return jwt.sign({ user }, process.env.JWT_SECRET_KEY)
// }


// const Register = async (req, resp) => {
//     try {

//         // we will try to find the user with the email provided
//         let user = await User.findOne({ email: req.body.email }).lean().exec()


//         //if user is found then it is an error
//         if (user) {
//             return resp.status(400).send({ message: "This Email is Allready Exits! Please try another email" })
//         }


//         //if user is not found then we will create the user with the email and the password provided
//         user = await User.create(req.body)


//         //then we will hash the password to make the password more secure (besically we encrype the password so that no one can see it)
//         //  --- First install bcryptjs,,,npm i bcryptjs

//         // this step is in user.model file


//         //then we will create the token for the user

//         const Token = newToken(user)


//         resp.send({ user, Token })
//     }
//     catch (err) {
//         return resp.status(500).send(err.message)
//     }
// }






// -------------------------Fresh Code For Register------------------------------------


/*

const User = require('../models/user.model')

const JWT = require("jsonwebtoken")

require("dotenv").config()


const NewToken = (user) => {
    const jwtToken = JWT.sign({ user }, process.env.JWT_SECRET_KEY)
    return jwtToken;
}

const Register = async (req, resp) => {
    try {
        let user = await User.findOne({ email: req.body.email }).lean().exec()

        //check user exist is not
        if (user) {
            return resp.status(400).send({ message: "Email is Already Exists" })
        }

        //create new user
        user = await User.create(req.body)             // this will give us email and password

        // create JWT token
        const token = NewToken(user)

        return resp.status(200).send({ user, token })
    }
    catch (err) {
        return resp.status(500).send(err.message)
    }

}


*/



// __________________LOGIN_______________________________


// const Login = async (req, resp) => {
//     try {

//         //we will find the user with the email provided
//         const user = await User.findOne({ email: req.body.email })

//         //if user not found then return error

//         if (!user) {
//             return resp.status(400).send({ message: "Please try another email or password" })
//         }


//         // if user found then we will match the password

//         // -------->// we will check in the user.model.js file

//         // const match = req.body.password

//         // CheckPassword is defined in user.model 
//         const match = user.CheckPassword(req.body.password)

//         if (!match) {
//             return resp.status(400).send({ message: "Please try another email or password" })
//         }

//         // create JWT token
//         const token = NewToken(user)

//         return resp.status(200).send({ user, token })
//     }
//     catch (err) {
//         return resp.status(500).send(err.message)
//     }
// }



// --------------------------------Login Fresh------------------------------------


const Login = async (req, resp) => {
    try {

        //we will find the user with the email provided
        const user = await User.findOne({ email: req.body.email })

        //if user not found then return error
        if (!user) {
            return resp.status(400).send({ message: "Please try another email or password" })
        }

       // if user found then we will match the password
        // CheckPassword is defined in user.model 
        const match = user.CheckPassword(req.body.password)

        if (!match) {
            return resp.status(400).send({ message: "Please try another email or password" })
        }

        // create JWT token
        const token = NewToken(user)

        return resp.status(200).send({ user, token })
    }
    catch (err) {
        return resp.status(500).send(err.message)
    }
}




module.exports = { Register, Login }