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



};