const nodemailer = require("nodemailer");

module.exports = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: "416ee8e8f907fe", // generated ethereal user
      pass: "247a390a39df4a", // generated ethereal password
    },
  });