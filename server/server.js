const express = require("express")
const morgan = require("morgan")
const cors = require("cors")
const router = require('./router/router')
const fileUpload = require("express-fileupload")
require("./config")

// App
const app = express()
// Setting
app.set("PORT", process.env.PORT || process.env.DB_PORT)
// Middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(fileUpload({
    useTempFiles : true,
    tempFileDir : './upload/'
}));
app.use(morgan('dev'))
app.use(cors())
// Static
// app.use(express.static("public/"))
// Router
router(app)
// Port
app.listen(app.get("PORT"), () => {
    console.log(`Listen in running port ${app.get("PORT")}`)
})