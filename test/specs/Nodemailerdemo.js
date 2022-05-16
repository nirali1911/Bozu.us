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

// export async function SendFailureMail() {
    
//     //let testAccount = await nodemailer.createTestAccount();

//     let trasporter = nodemailer.createTransport({
//         host: "smtp.gmail.com",
//         port: 587,
//         secure: false,
//         service: "gmail",
//         auth: {
//             user: "niraliwdv@gmail.com",
//             pass: "SmartAnalyst2022",
    
//     },
//     tls: {
//         rejectUnauthorized: false
//     }

//     });
//     let info = await trasporter.sendMail({
//         from: "niraliwdv@gmail.com",
//         to: "nirali1911soni@gmail.com",
//         subject: "Demo Meeting isn't working",
//         text: "WOW! That's simple!",
//         html: "<b>Demo Meeting isn't working</b>",
   
//     });

//     console.log("Message sent: %s",info.messageId);

//     console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
// }



// export async function joineventnowsendemailpass() {
    
//     ///let testAccount = await nodemailer.createTestAccount();

//     let trasporter = nodemailer.createTransport({
//         host: "smtp.gmail.com",
//         port: 587,
//         secure: false,
//         service: "gmail",
//         auth: {
//             user: "niraliwdv@gmail.com",
//             pass: "SmartAnalyst2022",
    
//     },
//     tls: {
//         rejectUnauthorized: false
//     }

//     });
//     let info = await trasporter.sendMail({
//         from: "niraliwdv@gmail.com",
//         to: "nirali1911soni@gmail.com",
//         subject: "JoinEventNow Available",
//         text: "WOW! That's simple!",
//         html: "<b>JoinEventNow button is Available</b>",
   
//     });

//     console.log("Message sent: %s",info.messageId);

//     console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
// }

// export async function joineventnowsendemailfail() {
    
//     //let testAccount = await nodemailer.createTestAccount();

//     let trasporter = nodemailer.createTransport({
//         host: "smtp.gmail.com",
//         port: 587,
//         secure: false,
//         service: "gmail",
//         auth: {
//             user: "niraliwdv@gmail.com",
//             pass: "SmartAnalyst2022",
    
//     },
//     tls: {
//         rejectUnauthorized: false
//     }

//     });
//     let info = await trasporter.sendMail({
//         from: "niraliwdv@gmail.com",
//         to: "nirali1911soni@gmail.com",
//         subject: "JoinEventNow Unavailable",
//         text: "WOW! That's simple!",
//         html: "<b>JoinEventNow button is Unavailable</b>",
   
//     });

//     console.log("Message sent: %s",info.messageId);

//     console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
// }

// export async function videosendemailpass() {
    
//     //let testAccount = await nodemailer.createTestAccount();

//     let trasporter = nodemailer.createTransport({
//         host: "smtp.gmail.com",
//         port: 587,
//         secure: false,
//         service: "gmail",
//         auth: {
//             user: "niraliwdv@gmail.com",
//             pass: "SmartAnalyst2022",
    
//     },
//     tls: {
//         rejectUnauthorized: false
//     }

//     });
//     let info = await trasporter.sendMail({
//         from: "niraliwdv@gmail.com",
//         to: "nirali1911soni@gmail.com",
//         subject: "Video Enable",
//         text: "WOW! That's simple!",
//         html: "<b>Video button seems enable</b>",
   
//     });

//     console.log("Message sent: %s",info.messageId);

//     console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
// }

// export async function videosendemailfail() {
    
//     //let testAccount = await nodemailer.createTestAccount();

//     let trasporter = nodemailer.createTransport({
//         host: "smtp.gmail.com",
//         port: 587,
//         secure: false,
//         service: "gmail",
//         auth: {
//             user: "niraliwdv@gmail.com",
//             pass: "SmartAnalyst2022",
    
//     },
//     tls: {
//         rejectUnauthorized: false
//     }

//     });
//     let info = await trasporter.sendMail({
//         from: "niraliwdv@gmail.com",
//         to: "nirali1911soni@gmail.com",
//         subject: "Video Disable",
//         text: "WOW! That's simple!",
//         html: "<b>Video button seems disable</b>",
   
//     });

//     console.log("Message sent: %s",info.messageId);

//     console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
// }

// export async function audiosendemailpass() {
    
//     //let testAccount = await nodemailer.createTestAccount();

//     let trasporter = nodemailer.createTransport({
//         host: "smtp.gmail.com",
//         port: 587,
//         secure: false,
//         service: "gmail",
//         auth: {
//             user: "niraliwdv@gmail.com",
//             pass: "SmartAnalyst2022",
    
//     },
//     tls: {
//         rejectUnauthorized: false
//     }

//     });
//     let info = await trasporter.sendMail({
//         from: "niraliwdv@gmail.com",
//         to: "nirali1911soni@gmail.com",
//         subject: "Audio Enable",
//         text: "WOW! That's simple!",
//         html: "<b>Audio button seems enable</b>",
   
//     });

//     console.log("Message sent: %s",info.messageId);

//     console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
// }

// export async function audiosendemailfail() {
    
//     //let testAccount = await nodemailer.createTestAccount();

//     let trasporter = nodemailer.createTransport({
//         host: "smtp.gmail.com",
//         port: 587,
//         secure: false,
//         service: "gmail",
//         auth: {
//             user: "niraliwdv@gmail.com",
//             pass: "SmartAnalyst2022",
    
//     },
//     tls: {
//         rejectUnauthorized: false
//     }

//     });
//     let info = await trasporter.sendMail({
//         from: "niraliwdv@gmail.com",
//         to: "nirali1911soni@gmail.com",
//         subject: "Audio Disable",
//         text: "WOW! That's simple!",
//         html: "<b>Audio button seems disable</b>",
   
//     });

//     console.log("Message sent: %s",info.messageId);

//     console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
// }

// export async function sharescreensendemailpass() {
    
//     //let testAccount = await nodemailer.createTestAccount();

//     let trasporter = nodemailer.createTransport({
//         host: "smtp.gmail.com",
//         port: 587,
//         secure: false,
//         service: "gmail",
//         auth: {
//             user: "niraliwdv@gmail.com",
//             pass: "SmartAnalyst2022",
    
//     },
//     tls: {
//         rejectUnauthorized: false
//     }

//     });
//     let info = await trasporter.sendMail({
//         from: "niraliwdv@gmail.com",
//         to: "nirali1911soni@gmail.com",
//         subject: "Sharescreen Enable",
//         text: "WOW! That's simple!",
//         html: "<b>Sharescreen button seems enable</b>",
   
//     });

//     console.log("Message sent: %s",info.messageId);

//     console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
// }

// export async function sharescreensendemailfail() {
    
//     //let testAccount = await nodemailer.createTestAccount();

//     let trasporter = nodemailer.createTransport({
//         host: "smtp.gmail.com",
//         port: 587,
//         secure: false,
//         service: "gmail",
//         auth: {
//             user: "niraliwdv@gmail.com",
//             pass: "SmartAnalyst2022",
    
//     },
//     tls: {
//         rejectUnauthorized: false
//     }

//     });
//     let info = await trasporter.sendMail({
//         from: "niraliwdv@gmail.com",
//         to: "nirali1911soni@gmail.com",
//         subject: "Sharescreen Disable",
//         text: "WOW! That's simple!",
//         html: "<b>Sharescreen button seems disable</b>",
   
//     });

//     console.log("Message sent: %s",info.messageId);

//     console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
// }

// export async function cancelbuttonsendemailpass() {
    
//     //let testAccount = await nodemailer.createTestAccount();

//     let trasporter = nodemailer.createTransport({
//         host: "smtp.gmail.com",
//         port: 587,
//         secure: false,
//         service: "gmail",
//         auth: {
//             user: "niraliwdv@gmail.com",
//             pass: "SmartAnalyst2022",
    
//     },
//     tls: {
//         rejectUnauthorized: false
//     }

//     });
//     let info = await trasporter.sendMail({
//         from: "niraliwdv@gmail.com",
//         to: "nirali1911soni@gmail.com",
//         subject: "Cancelbutton Enable",
//         text: "WOW! That's simple!",
//         html: "<b>Cancelbutton button seems enable</b>",
   
//     });

//     console.log("Message sent: %s",info.messageId);

//     console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
// }

// export async function cancelbuttonsendemailfail() {
    
//     //let testAccount = await nodemailer.createTestAccount();

//     let trasporter = nodemailer.createTransport({
//         host: "smtp.gmail.com",
//         port: 587,
//         secure: false,
//         service: "gmail",
//         auth: {
//             user: "niraliwdv@gmail.com",
//             pass: "SmartAnalyst2022",
    
//     },
//     tls: {
//         rejectUnauthorized: false
//     }

//     });
//     let info = await trasporter.sendMail({
//         from: "niraliwdv@gmail.com",
//         to: "nirali1911soni@gmail.com",
//         subject: "Cancelbutton Disable",
//         text: "WOW! That's simple!",
//         html: "<b>Cancel button seems disable</b>",
   
//     });

//     console.log("Message sent: %s",info.messageId);

//     console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
// }

// export async function joingroupsendemailpass() {
    
//     ///let testAccount = await nodemailer.createTestAccount();

//     let trasporter = nodemailer.createTransport({
//         host: "smtp.gmail.com",
//         port: 587,
//         secure: false,
//         service: "gmail",
//         auth: {
//             user: "niraliwdv@gmail.com",
//             pass: "SmartAnalyst2022",
    
//     },
//     tls: {
//         rejectUnauthorized: false
//     }

//     });
//     let info = await trasporter.sendMail({
//         from: "niraliwdv@gmail.com",
//         to: "nirali1911soni@gmail.com",
//         subject: "JoinGroup Clickable",
//         text: "WOW! That's simple!",
//         html: "<b>JoinGroup button is clickable</b>",
   
//     });

//     console.log("Message sent: %s",info.messageId);

//     console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
// }

// export async function joingroupsendemailfail() {
    
//     //let testAccount = await nodemailer.createTestAccount();

//     let trasporter = nodemailer.createTransport({
//         host: "smtp.gmail.com",
//         port: 587,
//         secure: false,
//         service: "gmail",
//         auth: {
//             user: "niraliwdv@gmail.com",
//             pass: "SmartAnalyst2022",
    
//     },
//     tls: {
//         rejectUnauthorized: false
//     }

//     });
//     let info = await trasporter.sendMail({
//         from: "niraliwdv@gmail.com",
//         to: "nirali1911soni@gmail.com",
//         subject: "JoinGroup Unclickable",
//         text: "WOW! That's simple!",
//         html: "<b>JoinGroup button is unclickable</b>",
   
//     });

//     console.log("Message sent: %s",info.messageId);

//     console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
// }

// export async function joindemomeetingsendemailpass() {
    
//     ///let testAccount = await nodemailer.createTestAccount();

//     let trasporter = nodemailer.createTransport({
//         host: "smtp.gmail.com",
//         port: 587,
//         secure: false,
//         service: "gmail",
//         auth: {
//             user: "niraliwdv@gmail.com",
//             pass: "SmartAnalyst2022",
    
//     },
//     tls: {
//         rejectUnauthorized: false
//     }

//     });
//     let info = await trasporter.sendMail({
//         from: "niraliwdv@gmail.com",
//         to: "nirali1911soni@gmail.com",
//         subject: "JoinDemoMeeting Clickable",
//         text: "WOW! That's simple!",
//         html: "<b>JoinDemoMeeting button is clickable</b>",
   
//     });

//     console.log("Message sent: %s",info.messageId);

//     console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
// }

// export async function joindemomeetingsendemailfail() {
    
//     //let testAccount = await nodemailer.createTestAccount();

//     let trasporter = nodemailer.createTransport({
//         host: "smtp.gmail.com",
//         port: 587,
//         secure: false,
//         service: "gmail",
//         auth: {
//             user: "niraliwdv@gmail.com",
//             pass: "SmartAnalyst2022",
    
//     },
//     tls: {
//         rejectUnauthorized: false
//     }

//     });
//     let info = await trasporter.sendMail({
//         from: "niraliwdv@gmail.com",
//         to: "nirali1911soni@gmail.com",
//         subject: "JoinDemoMeeting Unclickable",
//         text: "WOW! That's simple!",
//         html: "<b>JoinDemoMeeting button is unclickable</b>",
   
//     });

//     console.log("Message sent: %s",info.messageId);

//     console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
// }


// export async function joindemomeetingnowsendemailpass() {
    
//     ///let testAccount = await nodemailer.createTestAccount();

//     let trasporter = nodemailer.createTransport({
//         host: "smtp.gmail.com",
//         port: 587,
//         secure: false,
//         service: "gmail",
//         auth: {
//             user: "niraliwdv@gmail.com",
//             pass: "SmartAnalyst2022",
    
//     },
//     tls: {
//         rejectUnauthorized: false
//     }

//     });
//     let info = await trasporter.sendMail({
//         from: "niraliwdv@gmail.com",
//         to: "nirali1911soni@gmail.com",
//         subject: "JoinDemoMeetingNow PASS",
//         text: "WOW! That's simple!",
//         html: "<b>Successfully redirect on Welcome to Demo Event Page</b>",
   
//     });

//     console.log("Message sent: %s",info.messageId);

//     console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
// }

// export async function joindemomeetingnowsendemailfail() {
    
//     //let testAccount = await nodemailer.createTestAccount();

//     let trasporter = nodemailer.createTransport({
//         host: "smtp.gmail.com",
//         port: 587,
//         secure: false,
//         service: "gmail",
//         auth: {
//             user: "niraliwdv@gmail.com",
//             pass: "SmartAnalyst2022",
    
//     },
//     tls: {
//         rejectUnauthorized: false
//     }

//     });
//     let info = await trasporter.sendMail({
//         from: "niraliwdv@gmail.com",
//         to: "nirali1911soni@gmail.com",
//         subject: "JoinDemoMeetingNow Fail",
//         text: "WOW! That's simple!",
//         html: "<b>FAIL to redirect on Welcome to Demo Event Page</b>",
   
//     });

//     console.log("Message sent: %s",info.messageId);

//     console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
// }
