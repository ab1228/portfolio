var express = require('express');

var PORT = process.env.PORT || 8080;


var app = express();

app.use(express.static('public'));
// app.use(express.static(__dirname + '/public/'));





//middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//set handlebars
var exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

require('./routes/html-routes')(app);


app.listen(PORT, function () {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
});

