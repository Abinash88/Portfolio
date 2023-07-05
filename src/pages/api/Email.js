"use strict";

import nodemailer from 'nodemailer';

const SendMail = ( firstname, lastname, email, subject , message) => {

    const email = process.env.EMAIL;
    const password =process.env.PASSWORD;

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: email,
            pass: password,
        }
    });

    
    async function main() {
        const info = await transporter.sendMail({
            from: email, // sender address
            to: 'subediabinas@gmail.com', // list of receivers
            subject: "",
            text: "Hello world?",
            html: `
            <html>
            <body>
                <div style='flex items-start justify-center flex-col'>
                    <h4>Name: ${firstname + lastname}</h4>
                    <h4>email: ${email}</h4>
                    <h4>subject: ${subject}</h4>
                    <h4>Message: ${message}</h4>
                </div>
            </body>
            </html>
            `,
        });

        console.log("Message sent: %s", info.messageId);
        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
    }

    main().catch(console.error);
}

export default SendMail;