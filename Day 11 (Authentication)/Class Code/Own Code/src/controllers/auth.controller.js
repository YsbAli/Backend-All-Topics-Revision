
const User = require("../models/user.model")


const Register = async (req, resp) => {
    try {

        // we will try to find the user with the email provided
        let user = await User.findOne({ email: req.body.email }).lean().exec()


        //if user is found then it is an error
        if (user) {
            return resp.status(400).send({ message: "This Email is Allready Exits! Please try another email" })
        }


        //if user is not found then we will create the user with the email and the password provided
        user = await User.create(req.body)


        //then we will hash the password to make the password more secure (besically we encrype the password so that no one can see it)
        //  --- First install bcryptjs,,,npm i bcryptjs



        resp.send(user)
    }
    catch (err) {
        return resp.status(500).send(err.message)
    }
}



const Login = (req, resp) => {
    try {
        resp.send("Login")
    }
    catch (err) {
        return resp.status(500).send(err.message)
    }
}


module.exports = { Register, Login }