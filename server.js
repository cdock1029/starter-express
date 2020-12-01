const express = require('express')
// const morgan = require('morgan')
// const session = require('express-session')
const { createRequestHandler } = require('@remix-run/express')

let app = express()

let env = process.env.NODE_ENV

app.use(express.static('public'))

app.all(
  '*',
  createRequestHandler({
    enableSessions: false,
    getLoadContext() {},
  })
)

let port = process.env.PORT || 3000
app.listen(port, '0.0.0.0', () => {
  console.log(
    `\n${env.toUpperCase()} Express server started on 0.0.0.0:${port}\n`
  )
})
