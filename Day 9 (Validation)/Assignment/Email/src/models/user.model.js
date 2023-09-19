const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    first_name:{type: 'string', required: true}, 
    last_name:{type: 'string', required: true}, 
    email:{type: 'string', required: true}, 
    pincode:{type:"Number",required: true},
    age:{type:'Number', required: true},
    gender:{type:'string', required: true}
},
{
    versionKey:false,
    timestampKey:true,
});
const User = mongoose.model('user',userSchema);
module.exports =User;

/*
Create an express application
Create a user model with following fields
first_name,
last_name,
email,
pincode,
age,
gender,
and try to implement below validations on these inputs
first_name => required
last_name => required
email => required and should be a valid email
pincode => required and should be exactly 6 numbers
age => required and should be between 1 and 100.
gender => required and should be either Male, Female or Others
Please Note :-
You can use express-validator or write your validator logic
*/