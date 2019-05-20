// Express App Setup
var express = require("express");
var app = express();
var PORT = process.env.PORT || 3000;
var bodyParser = require("body-parser");
var path = require("path");

// Seting up Express app to handle data parsing
app.use(express.static(__dirname + "/app/css"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

require("./app/routing/htmlRoutes")(app);
require("./app/routing/apiRoutes")(app);

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});