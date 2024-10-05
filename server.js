const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// Create a route for registration
app.post('/register', (req, res) => {
    const { username, email, password } = req.body;

    // TODO: You could add validation, save user to the database, etc.
    
    // Nodemailer configuration for sending email
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'your-email@gmail.com', // replace with your email
            pass: 'your-email-password' // replace with your email password or app password
        }
    });

    const mailOptions = {
        from: 'your-email@gmail.com',
        to: email,
        subject: 'LearnLab Registration Confirmation',
        text: `Hi ${username},\n\nThank you for registering at LearnLab! Your account has been created successfully.\n\nBest regards,\nLearnLab Team`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).json({ success: false, message: 'Failed to send confirmation email' });
        }
        res.status(200).json({ success: true, message: 'Registration successful. Confirmation email sent.' });
    });
});

// Start the server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
