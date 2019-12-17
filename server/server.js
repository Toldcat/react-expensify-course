const express = require('express')
const app = express()
const path = require('path')
const publicPath = path.join(__dirname, '..', '/public')
//check if heroku supplied a port, if not use 3000 for local connections
const port = process.env.PORT || 3000

app.use(express.static(publicPath))

app.get('*', (req, res, next) => {
  res.sendFile(path.join(publicPath, 'index.html'))
})

app.listen(port, () => console.log('server is up'))
