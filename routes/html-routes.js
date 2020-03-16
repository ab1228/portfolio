var path = require("path");
const nodemailer = require("nodemailer");

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
            host: "smtp.ethereal.email",
            port: 587,
            secure: false, // true for 465, false for other ports
            auth: {
                user: testAccount.user, // generated ethereal user
                pass: testAccount.pass // generated ethereal password
            },
            tls: {
                rejectUnauthorized: false
            }
        });


        // send mail with defined transport object
        let info = transporter.sendMail({
            from: '"Fred Foo 👻" <foo@example.com>', // sender address
            to: "bar@example.com, baz@example.com", // list of receivers
            subject: "Hello ✔", // Subject line
            text: "Hello world?", // plain text body
            html: output // html body
        });

        console.log("Message sent: %s", info.messageId);
        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

        // Preview only available when sending through an Ethereal account
        console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
        // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...

    })


};