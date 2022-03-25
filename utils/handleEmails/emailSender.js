const nodeMailer = require('nodemailer');
require('dotenv').config();

const sendEmail = async (user) => {
    const transpoter = nodeMailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        auth: {
            user: process.env.USER_ID, // make this email id in .env file
            pass:process.env.PASS // password also
        },
    })
    
await transpoter.sendMail({
    from:`"${process.env.NAME}" <${process.env.EMAIL}>` , // email also
    to: user,
    subject: "Task Created",
    text: "Your task is created"
})
}

module.exports = {
    sendEmail
}