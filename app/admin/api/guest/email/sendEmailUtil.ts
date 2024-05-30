import nodemailer from "nodemailer";






const transporter = nodemailer.createTransport({
    service: process.env.EMAIL_SERVICE,
    host: process.env.EMAIL_HOST,
    auth: {
      user: process.env.EMAIL_NAME,
      pass: process.env.EMAIL_PASSWORD
    },
    port: 465
  });

  interface MailOptionsInterface {
    from: string,
    to: string,
    subject: string,
    html: string
  };


async function sendEmail(mailOptions: MailOptionsInterface) {
  return await transporter.sendMail(mailOptions);
}

export {
    sendEmail
}
