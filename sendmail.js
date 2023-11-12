const nodemailer = require('nodemailer');

// Replace these values with your actual email credentials
const emailConfig = {
  service: 'gmail',
  auth: {
    user: 'your.email@gmail.com',
    pass: 'your-email-password',
  },
};

// Create a Nodemailer transporter
const transporter = nodemailer.createTransport(emailConfig);

// Function to send an email
function sendEmail() {
  // Email content
  const mailOptions = {
    from: 'your.email@gmail.com',
    to: 'recipient@example.com',
    subject: 'Test Email',
    text: 'This is a test email from Node.js!',
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.error('Error:', error);
    }
    console.log('Email sent:', info.response);
  });
}

// Call the function to send the email
sendEmail();