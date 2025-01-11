const nodemailer = require("nodemailer");

async function sendEmail() {
  try {
    // Create a transporter
    const transporter = nodemailer.createTransport({
      service: "gmail", // Use Gmail service (you can replace this with others like Outlook, Yahoo, etc.)
      auth: {
        user: "your-email@gmail.com", // Your email
        pass: "your-email-password", // Your email password or app-specific password
      },
    });

    // Email details
    const mailOptions = {
      from: '"Your Name" <your-email@gmail.com>', // Sender address
      to: "recipient-email@example.com", // List of recipients
      subject: "Hello from Nodemailer!", // Subject line
      text: "This is a plain text email sent using Node.js!", // Plain text body
      html: "<b>This is an HTML version of the email.</b>", // HTML body
    };

    // Send the email
    const info = await transporter.sendMail(mailOptions);

    console.log("Email sent: " + info.response);
  } catch (error) {
    console.error("Error sending email: ", error);
  }
}

// Call the function
sendEmail();
