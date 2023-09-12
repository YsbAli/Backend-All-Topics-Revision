// module.exports = ({name}) =>{

//     //Database Entry


//     //Email Setup


//     //Actual email send
//     console.log(`Send Varification Email ${name}`)     //Send Varification Email Ishan
// }

// Can write like this also {name}

// module.exports = ({name}) =>{
//     console.log(`Send Varification Mail to ${name}`)
// }



//using + operator

module.exports = ({name}) =>{
    console.log("Send Varification Mail to " + name)        // Send Varification Mail to Ishan
}