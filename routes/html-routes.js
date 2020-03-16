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



    })


};