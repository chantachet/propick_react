// import nodemailer from 'nodemailer'

import config from '../Mailer/config'
import express from 'express';
// import mailer from 'express-mailer';
// var nodemailer = require("nodemailer");
var app=express();
app.post('/career', function (req, res) {
    // node mailer code
});
app.listen(3000,function(){
console.log("Express Started on Port 3000");
});
// const nodemailer = require('nodemailer')
// var transporter = nodemailer.createTransport({
//     service: 'gmail',
//     host: "smtp.gmail.com",
//      auth: {
//          type: 'OAuth2',
//          user: config.user,
//          clientId: config.clientId,
//          clientSecret: config.clientSecret,
//          refreshToken: config.refreshToken,
//          accessToken: config.accessToken,
//          expires: 1484314697598
//      }
//  });
//  var mailOptions = {
//     from:    '"Me" <me@gmail.com>', // sender address
//     to:      'him@him.com, her@her.com', // list of receivers
//     subject: 'Hello dude', // Subject line
//     text:    'Test email with text', // plaintext body
//     html:    "Testing 1..2..7" // html body
// };

// // send mail with defined transport object
// transporter.sendMail(mailOptions, function (error, info) {
//     if (error) {
//         return console.log(error);
//     }
//     console.log('Message sent: ' + info.response);
// });
// const transporter = nodemailer.createTransport({
//     host: 'smtp.gmail.com',
//     port: 465,
//     secure: true,
//     auth: {
//         type: 'OAuth2',
//         user: config.user,
//         clientId: config.clientId,
//         clientSecret: config.clientSecret,
//         refreshToken: config.refreshToken,
//         accessToken: config.accessToken,
//         expires: 1484314697598
//     }
// });

// const Send = ({ email, name, text }) => {
//     const from = name && email ? `${name} <${email}>` : `${name || email}`
//     const message = {
//         from,
//         to: 'react.nodemailer@gmail.com',
//         subject: `New message from ${from} at creating-contact-forms-with-nodemailer-and-react`,
//         text,
//         replyTo: from
//     };

//     return new Promise((resolve, reject) => {
//         transporter.sendMail(message, (error, info) =>
//             error ? reject(error) : resolve(info)
//         )
//     })
// }

// export default Send

