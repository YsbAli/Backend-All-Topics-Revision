
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






const express = require('express')
const app = express()

app.use(express.json())

const ConnectDB = require('./configs/db')

const UserController = require('./controllers/user.controller')

const ProductController = require("./controllers/product.controller")

//importing passport from gooleOauth file
const passport = require('./configs/gooleOauth')


const { Register, Login } = require("./controllers/auth.controller")


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
    passport.authenticate('google', { failureRedirect: '/login' }),
    function (req, res) {
        // Successful authentication, redirect home.

        // res.redirect('/');
        return res.send(req.user)
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










