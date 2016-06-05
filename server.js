var express = require("express"),
    locale = require("locale")

var app = express()
var port = process.env.PORT || 3500

app.set('port', port)

app.get('/', function(req, res) {
  var language = function() {
    res.header("Content-Type", "text/plain")
    res.send(
      req.headers["accept-language"]
    )}
  var ipAdd = req.connection.remoteAddress
  var os = process.platform
  
  res.json({
    'language': language,
    'ip-address': ipAdd,
    'operating-system': os
  })
})

app.listen(port, () => {
  console.log("Server is listening on: ${port}")
})