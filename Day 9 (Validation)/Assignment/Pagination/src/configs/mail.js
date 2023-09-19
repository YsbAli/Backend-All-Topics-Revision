const nodemailer = require("nodemailer");

module.exports = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: "83e53fd74324af", // generated ethereal user
    pass: "4188f4c2e2f262", // generated ethereal password
  },
});
