
const passport = require('passport')

require("dotenv").config()

const { v4: uuidv4 } = require("uuid")

const User = require('../models/user.model')
// const GoogleUser = require('../models/GooleUser.model')


const GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:4012/auth/google/callback"
},
    async function (accessToken, refreshToken, profile, cb) {
        // User.findOrCreate({ googleId: profile.id }, function (err, user) {
        //     return cb(err, user);
        // });


        let user = await User.findOne({ email: profile?.email }).lean().exec()

        //this is for id ,,,in case of email is not presenet

        // let user = await GoogleUser.findOne(({id : profile?.id})).lean().exec()

        if (!user) {
            user = await User.create({
                email: profile?.email,
                password: uuidv4(),
                role: ["customer"]

            })
        }

        // console.log("accessToken, refreshToken, profile", accessToken, refreshToken, profile)

        // console.log("email", profile.email)                         //email is undefined

        // console.log(uuidv4())           //    d03c70b9-6f72-4279-806a-7d7a1cca7982  //   // this will give us a random string


        console.log("user", user)
        return cb(null, "user")

    }
));


module.exports = passport;