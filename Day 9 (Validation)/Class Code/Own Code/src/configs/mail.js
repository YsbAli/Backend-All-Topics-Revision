
const nodemailer = require('nodemailer')

module.exports = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 587,
    secure: false,
    auth: {
        // TODO: replace `user` and `pass` values from <https://forwardemail.net>
        user: "416ee8e8f907fe",
        pass: "247a390a39df4a",
    },
});