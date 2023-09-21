
/*

const mongoose = require('mongoose')

const bcrypt = require('bcryptjs')



const UserSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
},
    {
        versionKey: false,
        timestamps: true

    }
)

*/


// ------------------------Hashing Part-------------------

/*

// pre --> save pre
UserSchema.pre("save", function (next) {

    if (!this.isModified("password")) return next()                      //if user password is modified then return true,,, if user password do not modified or updated then no need to do anything


    //hashSync() will take user password and the number (how many times hashing will do) ,,,then bcrypt will mixed it with  salt ,,,,like this,,,, user Password --> secret + afjdadjfioansdfa(salt created by bcrypt) = adflajefoiqweka;osdijfoasdf (this is hashing)
    var hash = bcrypt.hashSync(this.password, 8)                  // this is refers to the parent object,,, here userSchema is an object of user object ,,, so this refers to the user

    this.password = hash                 //assigning it to the user password   ,,,
    return next()                        // returning the next()


    //  let's see user password is secret then the putput password will look like   --->      $2a$08$YkKCDmzlatuP88tSUrkocelhjkifUu1VeynwLvFwFSwrs2SAi2PLK

})


*/




// ------------------------ Fresh Code ~ Hashing Part-------------------


/*

UserSchema.pre('save', function (next) {

    if (!this.isModified("password")) return next()

    var hashPassword = bcrypt.hashSync(this.password, 8)

    this.password = hashPassword;                          // user given password is --> ysb@1232 --- hashing Password is --> $2a$08$TK2QcljCYmeg2etH2IPXJu0WGHPZM2hwW18GbdxCnN1UpffA7p9Ky

    return next()
})


*/


// -----------------------------This is for Password Checking,,,,, Login Part


// // here we are defining the CheckPassword function for checking the password,,, passign function and checking with the previous function

// UserSchema.methods.CheckPassword = function (password) {
//     return bcrypt.compareSync(password, this.password)     //password--> login time typed password,,,, this.password ---> registered time typed password    //compareSync is given by bcryptjs package ,,, this function is used to check login password and the registered password are same or not...........
// }


// Fresh Code

// UserSchema.methods.CheckPassword = function (password){
//     return bcrypt.compareSync(password, this.password)

// }





// const User = mongoose.model("userauth", UserSchema)    //userdata: userdatas

// module.exports = User






// __________________________FRESH CODE ALL___________________________



const mongoose = require('mongoose')

const bcrypt = require('bcryptjs')


//userModel
const UserSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
},
    {
        versionKey: false,
        timestamps: true

    }
)

//Hasging Password
UserSchema.pre('save', function (next) {

    if (!this.isModified("password")) return next()

    var hashPassword = bcrypt.hashSync(this.password, 8)

    this.password = hashPassword;                          // user given password is --> ysb@1232 --- hashing Password is --> $2a$08$TK2QcljCYmeg2etH2IPXJu0WGHPZM2hwW18GbdxCnN1UpffA7p9Ky

    return next()
})

//password authentication or password cheching

UserSchema.methods.CheckPassword = function (password) {
    return bcrypt.compareSync(password, this.password)

}


const User = mongoose.model("userauth", UserSchema)    //userdata: userdatas

module.exports = User






