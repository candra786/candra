const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send({
    "nrp": "3222600004",
    "name": "Dimas Candra Pangestu"
})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})