const express = require('express')
const app = express()
const cors = require('cors')
const port = 5000

app.use(cors())

const categories = require('./data/categories.json')

app.get('/news-categories', (req, res) => {
  res.send(categories)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})