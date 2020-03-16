require('dotenv').config()
var path = require("path");
const nodemailer = require("nodemailer");

const userPass = process.env.userPass;

const userEmail = process.env.userEmail


module.exports = function (app) {

    // Each of the below routes just handles the HTML page that the user gets sent to.

    // index route loads view.html
    app.get("/", function (req, res) {
        res.render("index");
    });

    app.get("/about", function (req, res) {
        res.render("about");
    });

    app.get("/contact", function (req, res) {
        res.render("contact");
    });

    app.get("/portfolio", function (req, res) {
        res.render("portfolio");
    });

    app.get('*', (req, res) => {
        res.render('index');
    });

    ////EMAIL
    app.post("/email", function (req, res) {
        const output = `
       <p> You have a new contact request </p>
       <h3> Contact Details</h3>
        <ul>
            <li>Name: ${req.body.name}</li>
            <li>Email: ${req.body.email}</li>
            <li>Phone: ${req.body.phone}</li>
        </ul>
        <h3>Message</h3>
        <p>${req.body.message}</p>`;

        let transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 587,
            secure: false, // true for 465, false for other ports
            auth: {
                user: userEmail, // generated ethereal user
                pass: userPass // generated ethereal password
            },
            tls: {
                rejectUnauthorized: false
            }
        });
        // setup email data with unicode symbols
        let mailOptions = {
            from: '"Nodemailer Contact" <your@email.com>', // sender address
            to: userEmail, // list of receivers
            subject: 'Portfolio Request', // Subject line
            text: 'Hello world?', // plain text body
            html: output // html body
        };

        // send mail with defined transport object
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return console.log(error);
            }
            console.log('Message sent: %s', info.messageId);
            console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

            res.render('contact', { msg: 'Email has been sent' });

        })
    })


};