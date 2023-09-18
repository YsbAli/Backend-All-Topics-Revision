
const transporter = require('./config/mail')

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

const SendMail = async ({ from, to, subject, text, html }) => {
    await transporter.sendMail({
        from,           //from : from   --> if key and value is same then no need to write value
        to,             // to : to
        subject,
        text,
        html,
    });
}



module.exports = { SendMail }