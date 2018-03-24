
var express = require("express");
var bodyParser = require("body-parser");

var app = express();


var PORT = process.env.PORT || 5500;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
app.use(express.static('app/'));

require("./routing/apiRoutes")(app);
require("./routing/htmlRoutes")(app);



app.listen(PORT, function() {
    console.log("Listening on port " + PORT);
});