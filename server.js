const nodemailer = require('nodemailer');
const fs = require('fs');
const path = require('path');

// Set up the transporter with Gmail service and authentication
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'info.nusratjahan.bd25@gmail.com', 
        pass: 'dnueyjykljuatyon'  
    }
});

// Read the HTML email template
const emailTemplatePath = path.join(__dirname, 'email.html');
const emailTemplate = fs.readFileSync(emailTemplatePath, 'utf8');

// Array of recipients
const recipients = ['info.nusratjahan.bd25@gmail.com', '1998musabbirkh@gmail.com', '1998illegaldream@gmail.com'];

// Function to send emails to all recipients
async function sendEmails() {
    try {
        for (let recipient of recipients) {
            let info = await transporter.sendMail({
                from: '"World Capital Point" <1998musabbirkh@gmail.com>', 
                to: recipient,
                subject: 'Enhance Your Online Presence', 
                html: emailTemplate 
            });

            console.log('Email sent to %s: %s', recipient, info.messageId);
        }
    } catch (error) {
        console.error('Error sending email:', error);
    }
}

// Call the function to send the emails
sendEmails();
