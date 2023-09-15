const express = require("express")
const app = express()
const cors = require("cors")
const helmet = require("helmet")
const session = require("../backend/auth/connectSession")
const routes = require("../backend/routes")
const PORT = process.env.PORT || 8080

app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(cors())
app.use(helmet())

session(app)
app.use(routes)
// For photo uploads
// app.use('/api/attachment', require('./routes/api/attachment'))
require("../backend/db/dbConnect")

app.listen(PORT, ()=>console.log(`Backend App listens on port.... ${PORT}`))

module.exports = app;