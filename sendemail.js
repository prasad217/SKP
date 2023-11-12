const Email = require("email.js");

const sendEmail = async (formData) => {
  try {
    // Your Email.js configuration
    const email = new Email({
      user: "prasadmekala127@gmail.com",
      service_id: "your_emailjs_service_id",
      template_id: "your_emailjs_template_id",
    });

    // Replace these placeholders with the actual data
    const messageData = {
      from_name: "S.K.P Aqua Traders Website",
      to_name: "Your Name",
      message_html: `
        <p>Name: ${formData.name}</p>
        <p>Email: ${formData.email}</p>
      `,
    };

    // Send the email
    await email.send(messageData);

    console.log("Email sent successfully!");
  } catch (error) {
    console.error("Error sending email:", error);
  }
};

module.exports = sendEmail;

