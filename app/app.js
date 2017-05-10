const app = require('express')()
const logger = require('./logger.js')

app.get('/', function (req, res) {
  var msg = 'Hello World!'
  var data = {
    request: {
      headers: req.headers,
      url: req.hostname,
      params: req.body
    },
    response: {
      status: res.statusCode,
      data: msg
    }
  }
  logger.info('Chamando rota base', data)
  res.send(msg)
})

app.listen(8090, function () {
  logger.info('Example app listening on port 8090!')
})