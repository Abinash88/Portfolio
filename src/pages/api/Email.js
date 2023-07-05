// "use strict";

// import nodemailer from 'nodemailer';
// import { google } from "googleapis";


// export const config = {
//     api: {
//         externalResolver: true,
//     },
// };

// const SendMail = (firstName, lastName, email, Subject, message) => {


//     // export this from the api route to remove api unnecessary warning
   
//     // https://dev.to/chandrapantachhetri/sending-emails-securely-using-node-js-nodemailer-smtp-gmail-and-oauth2-g3a
//     async function createTransporter() {
//         const OAuth2Client = new google.auth.OAuth2(
//             process.env.OAUTH_CLIENTID,
//             process.env.OAUTH_CLIENT_SECRET,
//             process.env.OAUTH_REDIRECT_URI // this is just the Oauth2 playground: https://developers.google.com/oauthplayground
//         );

//         OAuth2Client.setCredentials({
//             refresh_token: process.env.OAUTH_REFRESH_TOKEN,
//         });

//         const accessToken = await new Promise((resolve, reject) => {
//             OAuth2Client.getAccessToken((err, token) => {
//                 if (err) {
//                     reject("Failed to create access token :(");
//                 }
//                 resolve(token);
//             });
//         });

//         const transporter = nodemailer.createTransport({
//             service: "gmail",
//             auth: {
//                 type: "OAuth2",
//                 user: process.env.EMAIL,
//                 clientId: process.env.OAUTH_CLIENTID,
//                 clientSecret: process.env.OAUTH_CLIENT_SECRET,
//                 refreshToken: process.env.OAUTH_REFRESH_TOKEN,
//                 accessToken,
//             },
//             tls: {
//                 // thanks to: https://medium.com/@nickroach_50526/sending-emails-with-node-js-using-smtp-gmail-and-oauth2-316fe9c790a1
//                 rejectUnauthorized: false, // this made my request token work!
//             },
//         });

//         return transporter;
//     }

//     // Next.js expects only 1 export default function for req, res.

//     let htmlOutput = `
//   <p>You have a new estimate request.</p>
//   <h3>Contact Details</h3>
//   <ul>
//   <li>
//   <b>First Name: </b>${firstName}
//   </li>
//   <li>
//   <b>Last Name: </b>${lastName}
//   </li>
//   <li>
//   <b>Email: </b>${email}
//   </li>
//   <li>
//   <b>Subject: </b>${Subject}
//   </li>
//   </ul>
//   <h3>Message</h3>
//   <p>${message}</p>
//   `;

//     let mailOptions = {
//         from: `"${firstName} ${lastName}" <${email}>`, // the sender's name and email
//         to: process.env.EMAIL, // the company's email address
//         subject: "Quote Request",
//         html: htmlOutput,
//     };

//     const sendEmail = async (mailOptions) => {
//         let emailTransporter = await createTransporter();
//         await emailTransporter.sendMail(mailOptions);
//     };

//     // next.js' way to handle requests
//     sendEmail(mailOptions)
//         .then((result) => console.log(result))
//         .catch((error) => console.log(error.message,'errormessage in mail'));

// }

// export default SendMail;

