const express = require('express')
const mongo =  require('mongoose')
const bodyParser = require('body-parser')

const port  =  process.env.PORT || 3003
const db = mongo.connect("mongodb://localhost/bookApi")

const book =  require('./models/bookModel')
const bookRouter = require('./routes/bookRouter')(book)

const app = express()

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.use("/api", bookRouter)
app.listen(port, () => {
  console.log(`listening on port ${port}`)
})