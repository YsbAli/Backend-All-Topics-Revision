
// const express = require('express')
// const app = express()

// app.use(express.json())

// const ConnectDB = require('./configs/db')

// const UserController = require('./controllers/user.controller')

// const ProductController = require("./controllers/product.controller")


// const { Register, Login } = require("./controllers/auth.controller")


// //we are directly using the method here,,,don't use kind of middleware
// app.post("/register", Register)

// //Login
// app.post("/login", Login)


// app.use('/users', UserController)

// app.use('/products', ProductController)



// app.listen(4011, async () => {

//     try {
//         await ConnectDB()
//     }
//     catch (err) {
//         console.error(err.message)
//     }
//     console.log("Server in running on port 4011")
// })















// ________________________Google Auth_______________________--


/*


const express = require('express')
const app = express()

app.use(express.json())

const ConnectDB = require('./configs/db')

const UserController = require('./controllers/user.controller')

const ProductController = require("./controllers/product.controller")

//importing passport from gooleOauth file
const passport = require('./configs/gooleOauth')

// const { Register, Login,  } = require("./controllers/auth.controller")

// importing newToken for token
const { Register, Login, newToken } = require("./controllers/auth.controller")


//we are directly using the method here,,,don't use kind of middleware
app.post("/register", Register)

//Login
app.post("/login", Login)


app.use('/users', UserController)

app.use('/products', ProductController)



//copied from StackoverFlow

passport.serializeUser(function (user, done) {
    console.log("24", user)
    done(null, user)
})


passport.deserializeUser(function (user, done) {
    console.log("25", user)
    done(null, user)
})



//google auth,,,,,passpost is used here
app.get('/auth/google',
    passport.authenticate('google', { scope: ['profile'] }));


app.get('/auth/google/callback',

    passport.authenticate('google', { failureRedirect: '/login' }),                //failure middleware

    //success middleware


    // function (req, res) {
    //     // Successful authentication, redirect home.
    //     // res.redirect('/');                         //redirecting home page
    //     // return res.send(req.user)                 //returning the user details

    //     return res.send(req.user)                 //returning the user details
    // });


    // jwt token added and returinig the token after succes

    function (req, res) {
        //now returing the jwt token 
        // const token = newToken(req.user)

        // res.send({ user: req.user, token })

        // return res.send(req.user)                 //returning the user details

        //optimazing code,,, destructuring  {user}
        const { user } = req;

        const token = newToken(user)

        return res.send({ user: user, token })
    });


app.listen(4012, async () => {

    try {
        await ConnectDB()
    }
    catch (err) {
        console.error(err.message)
    }
    console.log("Server in running on port 4012")
})





*/











// __________________________Fresh Code______________________




const express = require('express')
const app = express()

app.use(express.json())

const ConnectDB = require('./configs/db')

const UserController = require('./controllers/user.controller')

const ProductController = require("./controllers/product.controller")

//importing passport from gooleOauth file
const passport = require('./configs/gooleOauth')


// importing newToken for token
const { Register, Login, newToken } = require("./controllers/auth.controller")


//we are directly using the method here,,,don't use kind of middleware
app.post("/register", Register)

//Login
app.post("/login", Login)


app.use('/users', UserController)

app.use('/products', ProductController)



//copied from StackoverFlow
passport.serializeUser(function (user, done) {
    console.log("24", user)
    done(null, user)
})


passport.deserializeUser(function (user, done) {
    console.log("25", user)
    done(null, user)
})


//goole auth routes
app.get('/auth/google',
    passport.authenticate('google', { scope: ['profile'] }));


app.get('/auth/google/callback',

    //failure
    passport.authenticate('google', { failureRedirect: '/login' }),                //failure middleware

    //success
    function (req, res) {
        const { user } = req;

        const token = newToken(user)

        return res.send({ user: user, token })
    });


app.listen(4012, async () => {

    try {
        await ConnectDB()
    }
    catch (err) {
        console.error(err.message)
    }
    console.log("Server in running on port 4012")
})



















