const transporter = require("./configs/mail");

const sendMail = async ({
  from,
  to,
  subject,
  text,
  html,
  attachments,
  alternatives,
}) => {
  await transporter.sendMail({
    from,
    to,
    subject,
    text,
    html,
    attachments,
    alternatives,
  });
};

const verificationMail = async ({
  from,
  to,
  user,
  attachments,
  alternatives,
}) => {
  await sendMail({
    from,
    to,
    subject: `Send Verification Email to ${user.first_name} ${user.last_name}`,
    text: `${user.first_name} ${user.last_name} please verify your email`,
    html: `<h1>${user.first_name} ${user.last_name} please verify your email</h1>`,
    attachments,
    alternatives,
  });
};

const welcomeMail = async ({ from, to, user, attachments, alternatives }) => {
  await sendMail({
    from,
    to,
    subject: `Send Welcome Email to ${user.first_name} ${user.last_name}`,
    text: `${user.first_name} ${user.last_name} welcome to masai`,
    // html: `<h1>${user.first_name} ${user.last_name} welcome to masai</h1>`,
    attachments,
    alternatives,
  });
};

module.exports = { sendMail, verificationMail, welcomeMail };
