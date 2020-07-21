const express = require('express')
const app = express()

const productsRoutes = require('./routes/products');

require('./database')

app.use(express.json())
app.use(productsRoutes)

app.listen(3000)
console.log("Server running", 3000)