const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
require("dotenv").config();
const mailer = require('nodemailer');
const app = express();
const PORT = process.env.PORT || 3030;

// npm run dev to fire the project


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*'); // Change later to only allow our server
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

if (process.env.NODE_ENV = 'production') {
    app.use(express.static('client/build'));
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}




app.get('/api', (req, res, next) => {
    res.send('API Status: I\'m awesome')
});


app.post('/api/email', (req, res, next) => {

    console.log(req.body);
    const transporter = mailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD
        }
    })
    const output =
        `
        <p>You have a new contact request</p>
        <ul>
            <li>Email: ${req.body.email}</li>
            <li>Subject: ${req.body.subject}</li>
            <li>Message: ${req.body.message}</li>
        </ul>
        `


    const msg = {
        to: 'savanna.be.ua@gmail.com',
        from: req.body.email,
        subject: req.body.subject,
        text: req.body.message,
        html: output
    }

    transporter.sendMail(msg)
        .then(result => {

            res.status(200).json({
                success: true
            });

        })
        .catch(err => {

            console.log('error: ', err);
            res.status(401).json({
                success: false
            });

        });

});


app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}.`);
});