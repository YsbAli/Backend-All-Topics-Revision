
// const transporter = require('./config/mail')

// const SendMail = async () => {
//     await transporter.sendMail({
//         from: '"Fred Foo 👻" <foo@example.com>', // sender address
//         to: "bar@example.com, baz@example.com", // list of receivers
//         subject: "Hello ✔", // Subject line
//         text: "Hello world?", // plain text body
//         html: "<h1> Hello Buddy! This is for <h2>NodeMailer</h2>testing</h1>", // html body
//     });
// }


//now do it dynamik

// const SendMail = async ({ from, to, subject, text, html }) => {
//     await transporter.sendMail({
//         from,           //from : from   --> if key and value is same then no need to write value
//         to,             // to : to
//         subject,
//         text,
//         html,
//     });
// }


// const SendVarificationEmail = async ({ from, to }) => {
//     await sendMail({
//         from,           //from : from   --> if key and value is same then no need to write value
//         to,             // to : to
//         subject: 'Sent Varification Mail',
//         text: 'Varification Mail',
//         html: "<h1>Varification Mail </h1>"
//     });
// }



// const WelcomeEmail = async ({ from, to }) => {
//     await sendMail({
//         from,           //from : from   --> if key and value is same then no need to write value
//         to,             // to : to
//         subject: "Send WelcomeEmail Mail",
//         text: 'Hello! Welcome to ShanTech',
//         html: "<h1>Hello! Welcome to ShanTech</h1>"
//     });
// }





// // Create it dynamik 

// const transporter = require('./config/mail')

// const SendVarificationEmail = async ({ from, to,users }) => {
//     await transporter.sendMail({
//         from,           //from : from   --> if key and value is same then no need to write value
//         to,             // to : to
//         subject: `Hello ${users.first_Name} ${users.last_Name} Welcome to Our Websites`,
//         text: `Hello ${users.first_Name} ${users.last_Name} Please verify your email`,
//         html: `<h1>Hello ${users.first_Name} ${users.last_Name} Please verify your email</h1>`
//     });
// }


// const WelcomeEmail = async ({ from, to,users }) => {
//     await transporter.sendMail({
//         from,           //from : from   --> if key and value is same then no need to write value
//         to,             // to : to
//         subject: `Hello ${users.first_Name} ${users.last_Name} Welcome to Our Websites`,
//         text: `Hello ${users.first_Name} ${users.last_Name} Welcome !!`,
//         html: `<h1>Hello ${users.first_Name} ${users.last_Name} Welcome to ShanTech</h1>`
//     });
// }



// module.exports = { SendVarificationEmail, WelcomeEmail }





// Sending Attachments  ----- Create it dynamik 

const transporter = require('./config/mail')

const SendMail = async ({ from, to, subject, text, html, attachments }) => {
    await transporter.sendMail({
        from,           //from : from   --> if key and value is same then no need to write value
        to,             // to : to
        subject,
        text,
        html,
        attachments
    });
}



const SendVarificationEmail = async ({ from, to, users, attachments }) => {
    await transporter.sendMail({
        from,           //from : from   --> if key and value is same then no need to write value
        to,             // to : to
        subject: `Hello ${users.first_Name} ${users.last_Name} Welcome to Our Websites`,
        text: `Hello ${users.first_Name} ${users.last_Name} Please verify your email`,
        html: `<h1>Hello ${users.first_Name} ${users.last_Name} Please verify your email</h1>`,
        attachments,
    });
}


const WelcomeEmail = async ({ from, to, users, attachments }) => {
    await transporter.sendMail({
        from,           //from : from   --> if key and value is same then no need to write value
        to,             // to : to
        subject: `Hello ${users.first_Name} ${users.last_Name} Welcome to Our Websites`,
        text: `Hello ${users.first_Name} ${users.last_Name} Welcome !!`,
        html: `<h1>Hello ${users.first_Name} ${users.last_Name} Welcome to ShanTech</h1>`,
        attachments,
    });
}



module.exports = { SendMail, SendVarificationEmail, WelcomeEmail }



















