"use strict";
const nodemailer = require ("nodemailer");

export async function SendEmail(text,subject) {
    
    //let testAccount = await nodemailer.createTestAccount();

    let trasporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        service: "gmail",
        auth: {
            user: "niraliwdv@gmail.com",
            pass: "SmartAnalyst2022",
    
    },
    tls: {
        rejectUnauthorized: false
    }

    });

    //console.log("error",trasporter)
    let info = await trasporter.sendMail({
        from: "niraliwdv@gmail.com",
        to: "nirali1911soni@gmail.com, kajalwdv@gmail.com, archanawdv@gmail.com",
        subject: subject,
        text: "WOW! That's simple!",
        html: text,
    });

  
    console.log("Message sent: %s",info.messageId);

    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
}

