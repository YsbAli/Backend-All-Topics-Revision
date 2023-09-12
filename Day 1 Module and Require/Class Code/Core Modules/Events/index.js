// const EventEmitter = require("events")                 //events return class

// const eventEmitter = new EventEmitter;                  // it is written because it  the "event" core module returns the class or constructor
// // console.log("EventEmmmiter", eventEmitter)  

// function userRegisteredOnWebsite() {

//     eventEmitter.on("User Registered", () => {
//         console.log("Send Varification Email")
//     });
//     eventEmitter.on("User Registered", () => {
//         console.log("Send Welcome Email")
//     });
//     eventEmitter.on("User Registered", () => {
//         console.log("Send Admin Email")
//     });

//     eventEmitter.emit("User Registered");

// }

// userRegisteredOnWebsite()



// // emit(): it is used for triggering an evnet . we can have multiple event in one emit()
// // on()  : it is used for listening   ,,,,,it says to node that this is a listener, so it need to be added to the array for the key


// /*
//     events: {
//         "User Registered": [
//             () => {
//                 console.log("Send Verification Email");
//             },
//             () => {
//                 console.log("Send Welcome Email");
//             },
//             () => {
//                 console.log("Send Admin Email");
//             }
//         ]
//     }
// */



// Now We can do that same thing using module.exports

const EventEmitter2 = require('events')
const eventsEmitter2 = new EventEmitter2;

const VarificationMail = require('./Send_Varification_mail')
const WelcomeMail = require('./Send_Welcome_mail')
const AdminMail = require('./Send_Admin_mail');
const Send_Varification_mail = require('./Send_Varification_mail');
const Send_Welcome_mail = require('./Send_Welcome_mail');
const Send_Admin_mail = require('./Send_Admin_mail');



// const userRegisteredOnWebsite2 = () => {
//     // eventsEmitter2.on("User Registered", ()=>{
//     //   console.log("User Varification Email Send")
//     // })
//     eventsEmitter2.on("User Registered", VarificationMail)
//     eventsEmitter2.on("User Registered", WelcomeMail)
//     eventsEmitter2.on("User Registered", AdminMail)
//     eventsEmitter2.emit("User Registered");
// }

// userRegisteredOnWebsite2()


//Now we can send the email to perticuler data 


const UserRegistered =  () => {
    eventsEmitter2.on("User Registered", Send_Admin_mail)
    eventsEmitter2.on("User Registered", Send_Varification_mail)
    eventsEmitter2.on("User Registered", Send_Welcome_mail)
    
    eventsEmitter2.emit("User Registered",{name:"Ishan"})

}

UserRegistered()        //Send Admin Email to Ishan