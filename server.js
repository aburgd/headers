var express = require("express"),
    locale = require("locale")

var app = express()
var port = process.env.PORT || 3500

app.set('port', port)

app.get('/', function(req, res) {
  var language = req.headers["accept-language"]
  var ip = req.headers["x-forwarded-for"] || req.ip;
  var os = process.platform
  
  res.send({
    'language': language,
    'ip-address': ip,
    'operating-system': os
    })
})

app.listen(port, function(port) {
  console.log("Server is listening on: ${port}")
})