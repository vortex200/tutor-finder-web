const nodemailer = require("nodemailer");
const mg = require("nodemailer-mailgun-transport");

const auth = {
  auth: {
    api_key: process.env.MAILGUN_API_KEY,
    domain: process.env.MAILGUN_DOMAIN,
  },
};

const sendEmail = (to, url, txt) => {
  const smtpTransport = nodemailer.createTransport(mg(auth));

  const mailOptions = {
    from: process.env.SENDER_EMAIL_ADDRESS,
    to: to,
    subject: "Tutor Web Authentication email verification",
    html: `
            <div style="max-width: 700px; margin:auto; border: 10px solid #ddd; padding: 50px 20px; font-size: 110%;">
            <h2 style="text-align: center; text-transform: uppercase;color: teal;">Welcome to the Tutor Finder website.</h2>
            <p>Congratulations! You're almost set to start using Tutor Finder.
                Just click the button below to validate your email address.
            </p>
            
            <a href=${url} style="background: crimson; text-decoration: none; color: white; padding: 10px 20px; margin: 10px 0; display: inline-block;">${txt}</a>
        
            <p>If the button doesn't work for any reason, you can also click on the link below:</p>
        
            <div>${url}</div>
            </div>
        `,
  };

  smtpTransport.sendMail(mailOptions, (err, infor) => {
    console.log(err, infor);
    if (err) return err;
    return infor;
  });
};

module.exports = sendEmail;
