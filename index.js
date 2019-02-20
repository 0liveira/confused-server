const express = require('express')
const bodyParser = require('body-parser')
const moment = require('moment')
const port = process.env.PORT || 3000

const app = express()

app.use(bodyParser.json())

app.get('/', (req, res) => {
  const isSuccess = moment().minute() % 2 === 0

  const responseStatusCode = isSuccess ? 200 : 418
  res.sendStatus(responseStatusCode)
})

app.post('/', (req, res) => {
  const isSuccess = moment().minute() % 2 === 0

  const responseStatusCode = isSuccess ? 200 : 418
  res.status(responseStatusCode).send('<foo>123</foo>')
})

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})
