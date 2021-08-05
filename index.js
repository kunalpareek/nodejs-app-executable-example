const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.use('/assets', express.static(__dirname + '/assets'));

const server = app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
