var express = require("express"),
    locale = require("locale"),
    useragent = require("express-useragent")

var app = express()
var port = process.env.PORT || 3500

app.set('port', port)

app.get('/', useragent.express(), (req, res) => {
  var language = req.headers["accept-language"]
  var ip = req.headers["x-forwarded-for"] || req.ip
  var os = req.useragent.os
  
  res.send({
    'language': language,
    'ip-address': ip,
    'operating-system': os
    })
})

app.listen(port, function(port) {
  console.log("Server is listening on: ${port}")
})