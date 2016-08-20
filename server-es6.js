const express = require('express')
// const locale = require('locale')
const useragent = require('useragent')

const app = express()
const port = process.env.PORT || 3500

app.set('port', port)

app.get('/', useragent.express(), (req, res) => {
  var language = req.headers['accept-language']
  var ip = req.headers['x-forwarded-for'] || req.ip
  var os = req.useragent.os

  res.send({
    'language': language,
    'ip-address': ip,
    'operating-system': os
  })
})

app.listen(port, (port) => {
  console.log('Server is listening on: ${port}')
})
