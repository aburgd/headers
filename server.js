var express = require("express"),
    locale = require("locale");

var app = express();
var port = process.env.PORT || 3500;

app.set('port', port);

app.get('/', function(req, res) {
  var language = req.headers["accept-language"];
  var ipAdd = req.connection.remoteAddress;
  var os = process.platform;
  
  res.send({
    'language': language,
    'ip-address': ipAdd,
    'operating-system': os
    });
});

app.listen(port, function(port) {
  console.log("Server is listening on: ${port}");
});