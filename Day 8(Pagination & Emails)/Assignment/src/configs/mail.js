const nodemailer = require("nodemailer");

module.exports = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: "8a1e9ce79f3f3a", // generated ethereal user
      pass: "249df080b4c067", // generated ethereal password
    },
  });