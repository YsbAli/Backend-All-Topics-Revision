const { body, validationResult } = require("express-validator");
const express = require("express");

const User = require("../models/user.model");

const router = express.Router();
router.post(
  "",

  body("first_name")
    .isString()
    .isLowercase()
    .isLength({ min: 3, max: 20 })
    .withMessage("First name is required"),

body("last_name").isLength({ min: 3, max: 20 }).withMessage("Last name is required"),
body("email")
.isEmail()
.custom(async (value) => {
  const user = await User.findOne({ email: value }); //plz use findOne

  if (user) {
    throw new Error("Email is already in use");
  }
  return true;
}),
body("age").isNumeric(),
body("gender").isString().isLength({min: 3, max:5}),
async(req,res)=>{ 
    try{
        const errors = validationResult(req, res);
        if(!errors.isEmpty()){
            let newErrors;
            newErrors = errors.array().map((err)=>{
                console.log("err",err);
                return {key:err.param, message:err.message}
            });
            return res.status(400).send({errors:errors.array()});

        }
        return res.send(user);
    }catch(err){
        return res.status(500).send({message:err.message});
    }
}
);
module.exports =router;